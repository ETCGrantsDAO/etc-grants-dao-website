<template>
  <div>
    <div class="bg-background p-0 relative">
      <nav
        class="z-40 sticky pl-8 pr-6 xl:px-28 py-navMobile md:py-8 text-headingsColor top-0 bg-background w-fullWidth border-b-2 lg:border-b-0 border-footerBorder"
        ref="navBar"
      >
        <div class="flex items-center justify-between">
          <div
            class="w-logoMobileWidth cursor-pointer md:w-logoDesktopWidth h-logoDesktopheight flex float-left"
          >
            <p
              class="text-sm w-full my-auto pl-3 text-headingsColor lg:text-2xl font-semibold font-notoSans"
            >
              {{ $t("etc-grants-dao.title") }}
            </p>
          </div>

          <!-- Shortcuts in the header-->
          <div
            class="items-end float-right lg:space-x-4 xl:space-x-8 flex text-lg"
          >
            <a
              href="#about"
              class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700"
              >{{ $t("about.nav-heading") }}</a
            >
            <a
              href="#categories"
              class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700"
              >{{ $t("categories.nav-heading") }}</a
            >
            <a
              href="#requirements"
              class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700"
              >{{ $t("requirements.nav-heading") }}</a
            >

            <a
              href=""
              class="relative hidden lg:block font-notoSans font-semibold px-5 py-2 rounded text-headingsColor border-2 text-lg topApplyNow"
            >
              {{ $t("Apply Now") }}</a
            >

            <!-- English/Chinese toggle-->
            <div class="my-auto text-black"><LocaleSwitcher /></div>

            <!-- This is not visible ? -->
            <img
              src="../images/search.svg"
              class="my-auto lg:hidden ml-6"
              ref="navSearch"
            />

            <!-- Mobile-only hamburger view -->
            <img
              src="../images/hamBurger.svg"
              v-on:click="openNav()"
              class="my-auto lg:hidden ml-6"
              id="menuIcon"
              ref="navOpen"
            />
          </div>
        </div>
      </nav>
      <section class="">
        <div
          class="z-50 flex flex-col hidden lg:hidden pl-8 pr-6 pb-bodyY pt-3 max-h-screen bg-background w-screen top-6 fixed overflow-y-scroll"
          ref="navigation"
        >
          <div class="">
            <img
              src="../images/Cross.svg"
              v-on:click="closeNav()"
              class="ml-auto"
              id="menuIcon"
              ref="navClose"
            />
          </div>
          <a
            href="#"
            class="py-1 mt-11 text-black text-center bg-gradient-to-r from-[#133706] to-[#53EB45] font-notoSans text-base font-bold rounded"
          >
            <span class="text-headingsColor applyNowBtn relative">
              {{ $t("Apply Now") }}
            </span>
          </a>

          <!-- As per Scott, this is the navigation used for the mobile version of the website -->

          <!-- About mobile nav -->
          <a
            v-on:click="closeNav()"
            href="#about"
            class="pt-6 font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
          >
            {{ $t("about.nav-heading") }}
          </a>
          <p class="font-notoSans text-textColor text-base font-normal pb-4">
            {{ $t("about.ethereumClassicIn2023.nav-heading") }}</p>
           <p class="font-notoSans text-textColor text-base font-normal pb-4">
            {{ $t("about.funding.nav-heading") }}</p>

          <!-- Grant categories mobile nav -->
          <a
            v-on:click="closeNav()"
            href="#categories"
            class="pt-6 font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
          >
            {{ $t("categories.nav-heading") }}
          </a>
          <p class="font-notoSans text-textColor text-base font-normal pb-4">
            {{ $t("categories.general.nav-heading") }}
          </p>
          <p class="font-notoSans text-textColor text-base font-normal pb-4">
            {{ $t("categories.targeted.nav-heading") }}
          </p>
          <p class="font-notoSans text-textColor text-base font-normal pb-4">
            {{ $t("categories.types.nav-heading") }}
          </p>

          <!-- Requirements mobile nav -->
          <a
            v-on:click="closeNav()"
            href="#requirements"
            class="pt-6 font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
          >
            {{ $t("requirements.nav-heading") }}
          </a>
          <p class="font-notoSans text-textColor text-base font-normal pb-4">
            {{ $t("requirements.englishOrChinese.nav-heading") }}
          </p>
          <p class="font-notoSans text-textColor text-base font-normal pb-4">
            {{ $t("requirements.noRetroactiveFunding.nav-heading") }}
          </p>
          <p class="font-notoSans text-textColor text-base font-normal pb-4">
            {{ $t("requirements.openSource.nav-heading") }}
          </p>
          <p class="font-notoSans text-textColor text-base font-normal pb-4">
            {{ $t("requirements.kycAml.nav-heading") }}
          </p>
          <p class="font-notoSans text-textColor text-base font-normal pb-4">
            {{ $t("requirements.publiclyVisible.nav-heading") }}
          </p>

        </div>
      </section>

      <!-- This is the large section at the top left -->
      <section id="hero">
        <div
          class="bg-[url('../images/heroBgMobile.svg')] grid-cols-1 md:mt-14 heroSection grid md:grid-cols-2 bg-no-repeat bg-contain md:bg-cover min-h-heroHeight sm:bg-[url('../images/heroBg.svg')]"
        >
          <div
            class="my-auto mx-auto md:mx-0 md:my-0 text-center md:text-left container md:pl-8 xl:pl-28 md:pr-0 pt-11 content-end"
          >
            <p
              class="pl-heroHeadingMobile pr-heroHeadingMobile md:pl-0 md:pr-0 text-fourty leading-heroHeadingMobile text-headingsColor md:text-xxl md:leading-heroHeadingDesktop font-bold font-notoSans"
            >
              {{ $t("etc-grants-dao.title") }}
            </p>
            <p
              class="text-heroTextMobile md:text-heroTextDesktop text-headingsColor leading-heroText pt-6 pb-6 font-dmSans pl-8 pr-8 md:pl-0 md:pr-0"
            >
              {{ $t("etc-grants-dao.description") }}
            </p>
            <a
              href=""
              class="text-xl font-bold md:text-heroTextMobile mx-auto md:mx-0 px-5 py-3 rounded text-headingsColor bg-gradient-to-r from-[#133706] to-[#53EB45] font-notoSans w-heroButtonMobileWidth md:w-heroButtonDesktopWidth heroButton flex hover:scale-110 transition duration-300 ease-in-out"
              ><p>{{ $t("Apply Now") }}</p>
              <img
                src="../images/applyButtonIcon.png"
                class="max-w-heroBtnIcon max-h-heroBtnIcon ml-heroBtnIcon mt-heroBtnIconA"
              />
            </a>
          </div>
          <div class="hidden md:block"></div>
        </div>
      </section>

      <section id="body">
        <div
          class="z-20 py-bodyY bodySection flex md:px-8 xl:px-28 relative"
          id="about"
        >
        <!-- ^ id in wrong place-->

        <!-- Left hand side navigation for desktop site -->
          <div
            class="z-20 w-bodyLeftSecMobile lg:w-bodyLeftSecDesktop hidden md:block bodyLeftSec relative"
          >
            <div
              class="sticky top-32 overflow-y-auto h-bodyLeft bodyLeftSticky pr-8 mr-4"
            >
              <!-- Contents title -->
              <div class="top-28 bg-background navItems w-fit">
                <a href="#" class="flex">
                  <img src="../images/contentIcon.svg" class="mr-3" />
                  <p
                    class="font-notoSans text-headingsColor text-lg leading-twentyEight mt-1"
                  >
                    {{ $t("contents-title") }}
                  </p>
                </a>
              </div>

              <!-- About desktop navigation -->
              <div class="text-headingsColor pt-8 top-[136px] bg-background">
                <a
                  class="font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
                  ref="blOverview"
                  href="#about"
                >
                  {{ $t("about.nav-heading") }}
                </a>
              </div>
              <div class="text-headingsColor pt-6 pl-1">
                <a
                  class="font-notoSans text-textColor text-base font-normal"
                  href="#about.ethereumClassicIn2023"
                >
                  {{ $t("about.ethereumClassicIn2023.nav-heading") }}
                </a>
              </div>
              <div class="text-headingsColor pt-6 pl-1">
                <a
                  class="font-notoSans text-textColor text-base font-normal"
                  href="#about.funding"
                >
                  {{ $t("about.funding.nav-heading") }}
                </a>
              </div>

              <!-- Grant categories desktop navigation -->
              <div class="text-headingsColor pt-8">
                <a
                  class="font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
                  href="#categories"
                >
                  {{ $t("categories.nav-heading") }}
                </a>
              </div>
              <div class="text-headingsColor pt-6 pl-1">
                <a
                  class="font-notoSans text-textColor text-base font-normal"
                  href="#categories.general"
                >
                  {{ $t("categories.general.nav-heading") }}
                </a>
              </div>
              <div class="text-headingsColor pt-6 pl-1">
                <a
                  class="font-notoSans text-textColor text-base font-normal"
                  href="#categories.targeted"
                >
                  {{ $t("categories.targeted.nav-heading") }}
                </a>
              </div>
              <div class="text-headingsColor pt-6 pl-1">
                <a
                  class="font-notoSans text-textColor text-base font-normal"
                  href="#categories.types"
                >
                  {{ $t("categories.types.nav-heading") }}
                </a>
              </div>

              <!-- Requirements desktop navigation -->
              <div class="text-headingsColor pt-8">
                <a
                  class="font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
                  href="#requirements"
                >
                  {{ $t("requirements.nav-heading") }}
                </a>
              </div>
              <div class="text-headingsColor pt-6 pl-1">
                <a
                  class="font-notoSans text-textColor text-base font-normal"
                  href="#requirements.englishOrChinese"
                >
                  {{ $t("requirements.englishOrChinese.nav-heading") }}
                </a>
              </div>
              <div class="text-headingsColor pt-6 pl-1">
                <a
                  class="font-notoSans text-textColor text-base font-normal"
                  href="#requirements.noRetroactiveFunding"
                >
                  {{ $t("requirements.noRetroactiveFunding.nav-heading") }}
                </a>
              </div>
              <div class="text-headingsColor pt-6 pl-1">
                <a
                  class="font-notoSans text-textColor text-base font-normal"
                  href="#requirements.openSource"
                >
                  {{ $t("requirements.openSource.nav-heading") }}
                </a>
              </div>
              <div class="text-headingsColor pt-6 pl-1">
                <a
                  class="font-notoSans text-textColor text-base font-normal"
                  href="#requirements.kycAml"
                >
                  {{ $t("requirements.kycAml.nav-heading") }}
                </a>
              </div>
              <div class="text-headingsColor pt-6 pl-1">
                <a
                  class="font-notoSans text-textColor text-base font-normal"
                  href="#requirements.publiclyVisible"
                >
                  {{ $t("requirements.publiclyVisible.nav-heading") }}
                </a>
              </div>

            </div>
          </div>

          <!-- Right hand side, main view -->
          <div
            class="w-fullWidth text-left md:w-bodyRightSecMobile relative lg:w-bodyRightSecDesktop pl-8 pr-8 border-0 bodyRightSec md:border-l-2 md:pl-12 md:pr-0"
          >

            <!-- About ETC Grants DAO -->
            <!-- Should be here <a id="about"/> -->
            <div class="">
              <p
                class="font-notoSans text-headingsColor text-thirtyTwo md:text-fourty leading-rightHeadingsDt font-bold"
              >
                {{ $t("about.heading") }}
              </p>
            </div>

            <div class="pt-12"></div>

            <!-- About ETC Grants DAO / Ethereum Classic in 2023 -->
            <a id="about.ethereumClassicIn2023"/>
            <div class="text-headingsColor">
              <p
                class="font-notoSans text-headingsColor text-twentyFour leading-thirtySix md:text-thirtyTwo md:leading-rightHeadingsDt rightSecHeading"
              >
                {{ $t("about.ethereumClassicIn2023.heading") }}
              </p>
            </div>

            <div class="pt-12"></div>
            <div>
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("about.ethereumClassicIn2023.body.p1") }}
              </p>
            </div>
            <div class="pt-12"></div>
            <div>
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText pb-8"
              >
                {{ $t("about.ethereumClassicIn2023.body.p2") }}
              </p>
            </div>

            <!-- Market cap table - we should just use an image -->
            <table
              class="rounded-[5px] overflow-hidden border-t-4 border-b-[12px] border-l-4 border-r-4 text-base mx-auto sm:w-tableDesktopWidth ml-tableMobile mr-tableMobile xs:ml-0 xs:mr-0 pr-9 bg-tableBackground font-dmSans md:text-lg rounded mt-12 md:border-r-fourty md:border-l-fourty"
            >
              <thead>
                <tr>
                  <th
                    class="overflow-hidden text-left border-b-[2.5px] border-solid border-tableHBorder pl-1 pt-2 font-notoSans leading-8"
                  >
                    {{ $t("tableHeading1") }}
                  </th>
                  <th
                    class="overflow-hidden text-left border-b-[2.5px] border-solid border-tableHBorder pl-1 pt-2 font-notoSans leading-8"
                  >
                    {{ $t("tableHeading2") }}
                  </th>
                  <th
                    class="overflow-hidden text-left border-b-[2.5px] border-solid border-tableHBorder pl-1 pt-2 font-notoSans leading-8"
                  >
                    {{ $t("tableHeading3") }}
                  </th>
                  <th
                    class="overflow-hidden text-left border-b-[2.5px] border-solid border-tableHBorder pl-1 pt-2 font-notoSans leading-8"
                  >
                    {{ $t("tableHeading4") }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol1-1") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol2-1") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol3-1") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol4-1") }}</td>
                </tr>
                <tr>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol1-2") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol2-2") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol3-2") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol4-2") }}</td>
                </tr>
                <tr>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol1-3") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol2-3") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol3-3") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol4-3") }}</td>
                </tr>
                <tr class="bg-parrotGreen font-bold">
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol1-4") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol2-4") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol3-4") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol4-4") }}</td>
                </tr>
                <tr>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol1-5") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol2-5") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol3-5") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol4-5") }}</td>
                </tr>
                <tr>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol1-6") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol2-6") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol3-6") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol4-6") }}</td>
                </tr>
                <tr>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol1-7") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol2-7") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol3-7") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol4-7") }}</td>
                </tr>
                <tr>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol1-8") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol2-8") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol3-8") }}</td>
                  <td class="pl-1 pt-2 text-left">{{ $t("tableCol4-8") }}</td>
                </tr>
              </tbody>
            </table>

            <div class="pt-6"></div>
            <div>
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("about.ethereumClassicIn2023.body.p3") }}
              </p>
            </div>
            <div class="pt-12"></div>
            <div>
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("about.ethereumClassicIn2023.body.p4") }}
              </p>
            </div>

            <!-- About ETC Grants DAO / Funding -->
            <a id="about.funding"/>
            <div class="pt-16"></div>
            <div class="text-headingsColor">
              <p
                class="font-notoSans text-headingsColor text-twentyFour leading-thirtySix md:text-thirtyTwo md:leading-rightHeadingsDt font-bold"
              >
                {{ $t("about.funding.heading") }}
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText pb-8"
              >
                {{ $t("about.funding.body.p1") }}
              </p>
              <br/>
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("about.funding.body.p2") }}
              </p>
            </div>

            <!-- Grant categories -->
            <a id="categories"/>
            <div class="border-b-2 pb-16"></div>
            <div class="pt-16"></div>
            <div class="text-headingsColor" id="noRetFunding">
              <p
                class="font-notoSans text-headingsColor text-thirtyTwo md:text-fourty leading-rightHeadingsDt font-bold"
              >
                {{ $t("categories.heading") }}
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("categories.body.p1") }}
              </p>
            </div>
            <a id="categories.general"/>
            <div class="text-headingsColor pt-16">
              <p
                class="font-notoSans text-headingsColor text-twentyFour leading-thirtySix md:text-thirtyTwo md:leading-rightHeadingsDt font-bold"
              >
                {{ $t("categories.general.heading") }}
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("categories.general.body.p1") }}
              </p>
            </div>
            <a id="categories.targeted"/>
            <div class="text-headingsColor pt-16">
              <p
                class="font-notoSans text-headingsColor text-twentyFour leading-thirtySix md:text-thirtyTwo md:leading-rightHeadingsDt font-bold"
              >
                {{ $t("categories.targeted.heading") }}
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("categories.targeted.body.p1") }}
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("categories.targeted.body.p2") }}
              </p>
            </div>
            <a id="categories.types"/>
            <div class="text-headingsColor pt-16">
              <p
                class="font-notoSans text-headingsColor text-twentyFour leading-thirtySix md:text-thirtyTwo md:leading-rightHeadingsDt font-bold"
              >
                {{ $t("categories.types.heading") }}
              </p>
            </div>

            <!-- Requirements -->
            <a id="requirements"/>
            <div class="border-b-2 pb-16"></div>
            <div class="pt-16"></div>
            <div class="text-headingsColor">
              <p
                class="font-notoSans text-headingsColor text-thirtyTwo md:text-fourty leading-rightHeadingsDt font-bold"
              >
                {{ $t("requirements.heading") }}
              </p>
            </div>
            <a id="requirements.englishOrChinese"/>
            <div class="text-headingsColor pt-16">
              <p
                class="font-notoSans text-headingsColor text-twentyFour leading-thirtySix md:text-thirtyTwo md:leading-rightHeadingsDt font-bold"
              >
                {{ $t("requirements.englishOrChinese.heading") }}
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("requirements.englishOrChinese.body.p1") }}
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("requirements.englishOrChinese.body.p2") }}
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("requirements.englishOrChinese.body.p3") }}
              </p>
            </div>
            <div class="text-headingsColor pt-16">
              <p
                class="font-notoSans text-headingsColor text-twentyFour leading-thirtySix md:text-thirtyTwo md:leading-rightHeadingsDt font-bold"
              >
                {{ $t("requirements.noRetroactiveFunding.heading") }}
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("requirements.noRetroactiveFunding.body.p1") }}
              </p>
            </div>
            <div class="text-headingsColor pt-16">
              <p
                class="font-notoSans text-headingsColor text-twentyFour leading-thirtySix md:text-thirtyTwo md:leading-rightHeadingsDt font-bold"
              >
                {{ $t("requirements.openSource.heading") }}
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("requirements.openSource.body.p1") }} <br/>
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                - {{ $t("requirements.openSource.body.bullets.b1") }} <br/>
                - {{ $t("requirements.openSource.body.bullets.b2") }} <br/>
                - {{ $t("requirements.openSource.body.bullets.b3") }} <br/>
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("requirements.openSource.body.p2") }} <br/>
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("requirements.openSource.body.p3") }} <br/>
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("requirements.openSource.body.p4") }} <br/>
              </p>
            </div>
            <div class="text-headingsColor pt-16">
              <p
                class="font-notoSans text-headingsColor text-twentyFour leading-thirtySix md:text-thirtyTwo md:leading-rightHeadingsDt font-bold"
              >
                {{ $t("requirements.kycAml.heading") }}
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("requirements.kycAml.body.p1") }} <br/>
              </p>
            </div>
            <div class="text-headingsColor pt-16">
              <p
                class="font-notoSans text-headingsColor text-twentyFour leading-thirtySix md:text-thirtyTwo md:leading-rightHeadingsDt font-bold"
              >
                {{ $t("requirements.publiclyVisible.heading") }}
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("requirements.publiclyVisible.body.p1") }} <br/>
              </p>
            </div>
            <div class="text-headingsColor pt-12">
              <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText"
              >
                {{ $t("requirements.publiclyVisible.body.p2") }} <br/>
              </p>
            </div>

            <a
              href=""
              class="mx-auto md:mx-0 px-5 py-3 rounded text-headingsColor bg-gradient-to-r from-[#133706] to-[#53EB45] font-notoSans w-rightSecButton text-xl leading-twentyFour hidden lg:flex mt-8 hover:scale-110 transition duration-300 ease-in-out"
              ><p>{{ $t("Application Form") }}</p>
              <img
                src="../images/applyButtonIcon.png"
                class="max-w-heroBtnIcon max-h-heroBtnIcon ml-heroBtnIcon mt-heroBtnIcon2"
              />
            </a>
            <a
              href=""
              class="text-base md:text-heroTextMobile mt-8 md:mx-0 px-5 py-3 rounded text-headingsColor bg-gradient-to-r from-[#133706] to-[#53EB45] font-notoSans w-heroButtonMobileWidth md:w-heroButtonDesktopWidth heroButton flex lg:hidden"
              ><p>{{ $t("Apply Now") }}</p>
              <img
                src="../images/applyButtonIcon.png"
                class="max-w-heroBtnIcon max-h-heroBtnIcon ml-heroBtnIcon mt-heroBtnIcon1"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
    <footer
      class="px-8 bg-gradient-to-t from-[#0A1C3F] to-[#020518] border-2 border-footerBorder xl:px-32 py-12"
    >
      <div class="grid lg:grid-cols-5 xl:grid-cols-5 sm:grid-cols-1">
        <div class="pb-8 lg:pb-0">
          <div class="flex">
            <p
              class="text-2xl font-notoSans font-black text-headingsColor leading-8"
            >
              {{ $t("ETC") }} &nbsp;
            </p>
            <p
              class="text-2xl font-notoSans font-medium text-headingsColor leading-7"
            >
              {{ $t("Cooperative") }}
            </p>
          </div>
          <div class="flex pt-7">
            <img
              src="../images/twitter.svg"
              alt="t"
              class="mr-8 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
            />
            <img
              src="../images/messenger.svg"
              alt="t"
              class="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
        </div>
        <div class="pb-8 lg:pb-0">
          <p
            class="text-2xl font-notoSans font-black text-headingsColor leading-8"
          >
            {{ $t("footerHeading1") }}
          </p>
          <p
            class="text-base font-roboto font-normal text-headingsColor pt-8 leading-7"
          >
            {{ $t("footerHeading1Text1") }}
          </p>
          <p
            class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7"
          >
            {{ $t("footerHeading1Text2") }}
          </p>
          <p
            class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7"
          >
            {{ $t("footerHeading1Text3") }}
          </p>
          <p
            class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7"
          >
            {{ $t("footerHeading1Text4") }}
          </p>
        </div>
        <div class="pb-8 lg:pb-0">
          <p
            class="text-2xl font-notoSans font-black text-headingsColor leading-8"
          >
            {{ $t("footerHeading2") }}
          </p>
          <p
            class="text-base font-roboto font-normal text-headingsColor pt-8 leading-7"
          >
            {{ $t("footerHeading2Text1") }}
          </p>
          <p
            class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7"
          >
            {{ $t("footerHeading2Text2") }}
          </p>
        </div>
        <div class="pb-8 lg:pb-0">
          <p
            class="text-2xl font-notoSans font-black text-headingsColor leading-8"
          >
            {{ $t("footerHeading3") }}
          </p>
          <p
            class="text-base font-roboto font-normal text-headingsColor pt-8 leading-7"
          >
            {{ $t("footerHeading3Text1") }}
          </p>
          <p
            class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7"
          >
            {{ $t("footerHeading3Text2") }}
          </p>
          <p
            class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7"
          >
            {{ $t("footerHeading3Text3") }}
          </p>
          <p
            class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7"
          >
            {{ $t("footerHeading3Text4") }}
          </p>
          <p
            class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7"
          >
            {{ $t("footerHeading3Text5") }}
          </p>
        </div>
        <div class="pb-8 lg:pb-0">
          <p
            class="text-2xl font-notoSans font-black text-headingsColor leading-8"
          >
            {{ $t("footerHeading4") }}
          </p>
          <div class="pt-9">
            <img src="../images/bwRivlet.svg" alt="" />
          </div>
          <div class="pt-9">
            <img src="../images/netlify.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";
export default {
  name: "HomeView",
  components: {
    LocaleSwitcher,
  },
  methods: {
    openNav() {
      this.$refs.navigation.classList.remove("hidden");
    },
    closeNav() {
      this.$refs.navigation.classList.add("hidden");
    },
  },
  // mounted () {
  //   this.$refs.blOverview('inview-enter',
  //     alert(this.$refs.blOverview)
  //   )
  // },
};
</script>
