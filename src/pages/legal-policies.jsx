import { Container } from '@/components/Container'
import clsx from 'clsx'

const legal = [
  {
    title:
      'Privacy Policy<br/><small class="text-base font-xl">(Last update 19.01.2023)</small>',
    content: [
      'This Privacy Policy describes how we process your personal data on this website. While we aim to be as consistent as possible and to accord with all applicable privacy laws, specific requirements, rights and obligations relating to personal data and/or our data processing activities can differ in certain jurisdictions. ',
      'The following descriptions apply within the scope of applicability of the General Data Protection Regulation (“GDPR”). Where the GDPR does not apply these descriptions, do not necessarily apply and nothing in this Privacy Policy may be interpreted to establish rights or obligations that go beyond what is mandated by the respective applicable privacy laws. ',
      {
        title: '1. Who is responsible for data processing?',
        content: [
          `We are responsible within the meaning of Article 4 (7) GDPR. You can reach us at: <br/>
                Minimum Spanning Technologies Limited (10889544)<br/>
International House, 24 Holborn Viaduct, <br/>
London, EC1A 2BN, United Kingdom.`,
        ],
      },
      {
        title: '2. For what purposes do we process your personal data?',
        content: [
          {
            title: '2.1. Use of the Website and contact via the Website',
            content: [
              `Processing purposes: We operate the Website to provide information on our services. To contact us, we provide a mailto-link on the website which you can use to send us messages.  Although you can use the Website without the processing of your personal data, in such case, we cannot contact you without your provision of personal data.`,
              `Categories of data: For the processing purposes mentioned above, we process your e-mail address, IP address, date and time of the request as well as additional personal data that you voluntarily provide to us for the purposes of contacting us, such as first and last name, social media handle or telephone number. (In addition, the address (URL) of the accessed website, browser and browser version, the operating system used, the address (URL) of the previously visited pages (referrer URL), the host name and the IP address of the device from which access is made and the date are also recorded and time stored in web server log files.).`,
              `Legal basis: We process personal data on the basis of legitimate legal interests (Article 6 (1) (f) GDPR) for the proper operation of the Website and for the provision of information about us.`,
              `Duration of storage: We store personal data for the processing purposes mentioned above for the duration of the visit of the website or, in the case of a request via the mailto-link, for the duration of the processing of the request.`,
            ],
          },
          {
            title:
              '2.2 Processing of personal data for sending electronic messages',
            content: [
              'Purposes of processing: Upon your request, we will provide information about us and/or job opportunities (“job alert”) by email. For this, we need personal data. Without this data we cannot send the requested information.',
              'Categories of data: We process the email address for the aforementioned processing purpose.',
              'Legal basis: We process personal data for the processing purposes mentioned above on the basis of consent (Article 6 (1) (a) GDPR).',
              'Duration of storage: We process personal data for the above-mentioned processing purposes up to the point at which the respective consent is revoked. A revocation means that we no longer process data from this point in time.',
              'To revoke the consent, please contact us.',
            ],
          },
          {
            title: '2.3 Legal Prosecution',
            content: [
              'Processing purposes: In case of a legal dispute, we store the data necessary for appropriate legal prosecution in order to transmit this to legal representatives and courts.',
              'Categories of data: For the aforementioned processing purposes, we process contact details (e.g. first and last name, address), information and data in connection with the legal dispute in question (e.g. usage history or behavior in relation to the use of the Website).',
              'Legal basis: We process personal data on the basis of legitimate legal interests (Article 6 (1) (f) in conjunction with Article 9 (2) (f) GDPR) for appropriate legal prosecution.',
              'Duration of storage: We store personal data for the above-mentioned processing purposes for as long as this is necessary to assert claims against the users or to defend ourselves against claims they have made against us or until the statutory limitation periods have expired, whereby the statutory limitation period for claims from the breach of contracts is three years.',
            ],
          },
        ],
      },
      {
        title:
          '3. To which recipients will personal data be transmitted and where are they located?',
        content: [
          "In the course of our data processing, we transmit personal data to the following recipients to the extent necessary: called service providers, legal representatives, courts and administrative authorities as well as companies that are commissioned to support our company's internal IT infrastructure (software, hardware).",
          'We use processors who perform services on our behalf. The processors may only process the data provided to them in accordance with our instructions and to the extent necessary for us to carry out services.',
          'The level of data protection in other countries outside the EEA may not be the same as within the EEA. We only transfer your personal data to countries for which the European Commission has decided that they have an adequate level of data protection or we take measures to ensure that all recipients in third countries guarantee an adequate level of data protection. Herefore we conclude standard contractual clauses issued by the European Commission (Commission Implementing Decision (EU) 2021/914 pursuant to Regulation (EU) 2016/679) with these recipients. ',
        ],
      },
      {
        title: '4. Links to Other Sites',
        content: [
          "On our Website you may find links to other sites that are not operated by us. If you click a third-party link, you will be directed to that third-party's website. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.",
          {
            title: '4.1 Links to Social Media',
            content: [
              'On our Website you may find links to certain social media services. You can recognize links to the websites of the social media services by the respective company logo. If you follow these links, you will reach the corporate presence of accelerateAR.co at the respective social media service. When you click on a link to a social media service, a connection to the servers of the social media service is established. This transmits the information that you have visited our Website to the respective servers of the social media service. In addition, further data is transmitted to the provider of the social media service by your browser when you open the website of the social media service. These are, for example, the address of the website on which the activated link is located ("referrer"); date and time of calling up the website or activating the link; information about the browser and operating system used or the IP address.',
              'If you are already logged in to the corresponding social media service at the time of clicking on the link, the provider of the social media service may be able to determine your user name and possibly even your real name from the transmitted data and assign this information to your personal user account with the social media service. You can prevent this if you log out of your user account beforehand.',
              'The servers of the social media services are located in the US and other countries outside the European Union. The data may therefore also be processed by the provider of the social media service in countries outside the European Union. Please note that companies in these countries may be subject to data protection laws that do not generally protect personal data to the same extent as they do in the member states of the European Union. ',
            ],
          },
        ],
      },
      {
        title: "5.Children's Privacy",
        content: [
          'Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.',
        ],
      },
      {
        title: '6. Profiling',
        content: [
          'We process personal data neither automatically nor non-automatically with the aim of evaluating certain personal aspects (profiling).',
        ],
      },
      {
        title: '7. To what extent is there automated decision-making?',
        content: [
          'We do not use fully automated decision-making in accordance with Article 22 GDPR. If we use these processes in the future, we will inform separately about this and the rights in this regard, provided this is required by law.',
        ],
      },
      {
        title: 'Rights',
        content: [
          'Users have the right to information under Article 15 GDPR, the right to recti cation under Article 16 GDPR, the right to erasure under Article 17 GDPR, the right to restriction of processing under Article 18 GDPR, the right to object under Article 21 GDPR, the right not to be subject to automated decisions in individual cases, including pro ling, and the right to data portability in accordance with Article 20 GDPR. In addition, there is a right of appeal to a competent data protection supervisory authority (Article 77 GDPR).',
        ],
      },
      {
        title: 'Changes to This Privacy Policy',
        content: [
          'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this Website. We will let you know via email and/or a prominent notice on our Website, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.',
        ],
      },
    ],
  },
  {
    title:
      'Cookie Information<br/><small class="text-base font-xl">(Last update 19.01.2023)</small>',
    content: [
      {
        title: '1. What are cookies?',
        content: [
          'Cookies are small data sets that are generated by a web server, sent through the Internet and stored on an end device with the help of the browser program. The website uses "cookies" essentially to recognize users or their devices, to save the user\'s preferences or information for the duration of the sur ng or in the event of return. Cookies are also used to display behavior-based advertising and to control ad content.',
        ],
      },
      {
        title: '2. Types of cookies',
        content: [
          {
            title: '2.1 Distinction by domain',
            content: [
              'First party cookies: Are sent and read exclusively from the domain of the service provider. <br/>Third party cookies: Are sent and read by domains from other service providers.',
            ],
          },
          {
            title: '2.2 Distinction according to storage duration',
            content: [
              'Session cookies (session-id): Temporary cookies that are automatically deleted when the browser is closed. Session cookies enable the user\'s movements on the website to be recognized, so that information is retained. Without cookies, websites have no "memory".',
              'Persistent cookies: Persistent cookies that have to be deleted manually or are deleted after a certain period of time. These cookies help the website to remember the user and their preferences; e.g. language selection, menu preferences, internal bookmarks or favorites.',
            ],
          },
          {
            title: '2.3 Differentiation by usage',
            content: [
              'Technically necessary cookies: These cookies are required to ensure the functionality of the website and web application and cannot be deactivated for this reason.',
              'Analysis cookies: These cookies collect anonymous information to create statistics to better understand user behavior on the website and in the web application and to improve the application.',
              'Marketing Cookies: These cookies store information about visited websites in order to display personalized advertisements.',
            ],
          },
        ],
      },
      {
        title: '3. Use of cookies without consent',
        content: [
          'Arweave is entitled to store cookies on the end device of the (informed) user, the sole purpose of which is to carry out or facilitate the transmission of a message over an electronic communications network, or, to the extent strictly necessary, to carry out a service expressly requested by the participant or user to provide a service (Article 5 (3) ePrivacy Directive).',
        ],
      },
      {
        title: '4. Cookies we use',
        content: [
          'We use the following Cookies:',
          'Name: _ga<br/>Purpose: Analyse website usage for technical improvement.<br/>Duration: 2 years',
          'Name: _gat_gtag_UA<br/>Purpose: Store a unique user ID for statistics. <br/>Duration: 1 minute',
          'Name: _gid<br/>Store and count pageviews for statistics.<br/>Duration: 24 hours',
          {
            title: '4.1 Information on Google Analytics',
            content: [
              'Google Analytics is a web analytics service offered by Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA („Google“) that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.',
              'You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about visits activity. For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noreferrer">https://policies.google.com/privacy?hl=en</a>',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Legal Notice and Imprint',
    content: [
      {
        title: 'Imprint',
        content: [
          'Minimum Spanning Technologies Limited (10889544). <br/>International House, 24 Holborn Viaduct, <br/>London, EC1A 2BN, United Kingdom.',
        ],
      },
      {
        title: 'Legal Notice',
        content: [
          {
            title: 'Privacy policy',
            content: [
              'When using our services, you may be asked to provide personal information. Providing that information voluntary. Your personal data will be stored and processed in accordance with applicable privacy laws.',
              'Personal data collected on our website is used for the purpose of processing contracts and dealing with your inquiries. We assure that your data will be treated confidentially in accordance with the applicable data protection and privacy regulations. Your data will only be processed and used for the purposes of consulting, advertising and market research with your express consent. ',
            ],
          },
          {
            title: 'Cookies',
            content: [
              'Cookies are small data sets that are generated by a web server, sent through the Internet and stored on an end device with the help of the browser program. The website uses "cookies" essentially to recognize users or their devices, to save the user\'s preferences or information for the duration of the surfing or in the event of return. Cookies are also used to display behavior-based advertising and to control ad content.',
              'A cookie enables us to identify you when you visit the site again and to provide you with offers that are tailored to your individual needs and relevant to you. You can disable the use of cookies at any time via your browser settings. You can find out all about cookies in our Cookie Policy.',
            ],
          },
          {
            title: 'Copyright',
            content: [
              '&copy; Copyright 2020. Minimum Spanning Technologies Limited (10889544). International House, 24 Holborn Viaduct, London, EC1A 2BN, United Kingdom.',
            ],
          },
          {
            title: 'Liability',
            content: [
              'This website has been compiled with the greatest possible care. Nevertheless, we cannot guarantee the correctness and accuracy of the information contained therein. We shall not be liable for any damages arising directly or indirectly from the use of this website, unless caused by intent or gross negligence on our. Please see our Terms of Use for further information.',
            ],
          },
          {
            title: 'Trademarks',
            content: [
              'Unless otherwise indicated, all trademarks on this website are protected under applicable trademark law. This applies in particular to trademarks, type designations, logos and emblems.',
            ],
          },
        ],
      },
    ],
  },
]

// create hash from string to use as key
function hashCode(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return hash
}

function toHtml(item, subItem = 0) {
  return (
    <div
      key={hashCode(item.title)}
      className={clsx('my-6', subItem === 0 ? 'mb-16' : '')}
    >
      <h2
        className={clsx(
          'mb-4 font-bold',
          subItem === 0 ? 'text-2xl' : subItem === 1 ? 'text-xl' : 'text-lg'
        )}
        dangerouslySetInnerHTML={{ __html: item.title }}
      ></h2>
      {item.content.map((content) => {
        if (typeof content === 'string') {
          return (
            <p
              key={hashCode(content)}
              className="my-4"
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          )
        } else {
          return toHtml(content, subItem + 1)
        }
      })}
    </div>
  )
}

// Get html from the legal array
const html = legal.map((item) => {
  return toHtml(item)
})

export default function Use() {
  return (
    <>
      <section id="legal" aria-label="Legal">
        <Container className="relative z-10 ">
          <div className="mx-auto lg:mx-0 lg:pr-24">{html}</div>
        </Container>
      </section>
    </>
  )
}
