const fs = require("fs");
const glob = require("glob");
const yaml = require("yaml");
const markdownIt = require("markdown-it");

// helper functions
const clearHTMLTags = function (str) {
	return str.replace(/(<([^>]+)>)/gi, "");
};

const clearCommonMDTags = function (str) {
	return str
		.replaceAll("-", "")
		.replaceAll("\n", "")
		.replaceAll("**", "")
		.replaceAll("##", "")
		.replaceAll("\n", "");
};

const getDescriptionFromBody = function (mdFile) {
	const buffer = fs.readFileSync(mdFile);
	let fileContent = buffer.toString();

	// clear meta data
	const metas = /---(.*?)---/s.exec(fileContent);
	if (metas.length > 0) {
		fileContent = fileContent.replaceAll(metas[0], "");
	}

	//try to get first n character as plain text
	let body = "";
	let fullBody = "";

	try {
		let md = new markdownIt({
			html: true,
			linkify: true,
			typographer: true,
		});

		body = md.render(fileContent);
		body = clearHTMLTags(body);
		fullBody = body = clearCommonMDTags(body);
		fullBody = fullBody.slice(0, 10000);
		body = body.slice(0, 160) + "...";
	} catch (e) {}

	return [body, fullBody];
};

const getMetaData = function (mdFile) {
	const buffer = fs.readFileSync(mdFile);
	const fileContent = buffer.toString();
	let metadata = {};

	const metas = /---(.*?)---/s.exec(fileContent);
	if (metas.length > 0) {
		const clearMeta = metas[0].replaceAll("---", "");
		try {
			metadata = yaml.parse(clearMeta);
		} catch ($e) {}
	}

	return metadata;
};

const parseDateFromFileName = function (file) {
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const splited = file.split("-");
	let dateText = "";

	if (splited.length > 3) {
		const year = splited[0] || null;
		const month = splited[1] || null;
		const day = splited[2] || null;

		const date = new Date(`${year}-${month}-${day}`);

		if (Object.prototype.toString.call(date) === "[object Date]") {
			// it is a date
			if (isNaN(date)) {
				// d.getTime() or d.valueOf() will also work
				// date object is not valid
				dateText = "";
			} else {
				dateText = `${monthNames[date.getMonth()]} ${String(
					date.getDate()
				).padStart(2, "0")}, ${date.getFullYear()}`;
			}
		} else {
			dateText = "";
		}
	}

	return dateText;
};

// main process
const langs = ["en", "cn"];
for (const lang of langs) {

    const folder = `./src/contents/posts/${lang}`;

    const postsJson = [];

    fs.readdirSync(folder)
    .reverse()
    .forEach((file) => {
        const mdFiles = glob.globSync(`${folder}/${file}/*.md`);
        if (mdFiles.length > 0) {
            const mdFile = mdFiles[0];

            const metadata = getMetaData(mdFile);

            const imgFiles = glob.globSync(`${folder}/${file}/*.{jpeg,jpg,png}`);

            if (imgFiles.length > 0) {
                let featuredImgPath = imgFiles[0];
                const folderRelative = `${folder}/${file}/`.replace("./", "");
                const featuredImageName = featuredImgPath.replace(folderRelative, "");
                fs.copyFile(
                    featuredImgPath,
                    `public/img/posts/featuredImg/${featuredImageName}`,
                    (err) => {
                        console.log(err)
                    }
                );
            }

            postsJson.push({
                title: metadata.title || "",
                description: metadata.description || getDescriptionFromBody(mdFile)[0],
                author: metadata.author || "",
                tags: metadata.tags || [],
                alias: file,
                date: parseDateFromFileName(file),
                image: metadata.featuredImage,
            });
        }
    });

    fs.writeFileSync(
        `./src/contents/posts.${lang}.json`,
        JSON.stringify(postsJson, null, 2)
    );
}
