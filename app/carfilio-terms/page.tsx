import React from 'react'
import Header from '../components/Header'

const TermsAndConditions = () => {
  return (
    <div className="flex justify-center py-16 px-4 bg-white">
      <Header />
      <div className="max-w-4xl xl:mt-24 mt-10 w-full">
        <h1 className="text-4xl font-bold text-center mb-2">Terms and Conditions</h1>
        <p className="text-center text-gray-600 mb-8">Effective Date: April 11, 2025</p>
        
        {/* Section 2: Definitions */}
        <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">
          2. DEFINITIONS
        </h2>
        <dl className="space-y-4">
          <div>
            <dt className="font-semibold text-gray-700">“Access Credentials”</dt>
            <dd className="ml-4 text-gray-600">
              means any user name, identification number, password, license or
              security key, security token, PIN, or other security code, method, technology, or device, used alone or in
              combination, to verify an individual&apos;s identity and authorization to access and use the Services.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Action”</dt>
            <dd className="ml-4 text-gray-600">
              means any claim, action, cause of action, demand, lawsuit, arbitration, inquiry,
              audit, notice of violation, proceeding, litigation, citation, summons, subpoena, or investigation of any
              nature, civil, criminal, administrative, regulatory, or other, whether at law, in equity, or otherwise.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Affiliate”</dt>
            <dd className="ml-4 text-gray-600">
              of a Person means any other Person that directly or indirectly, through one or
              more intermediaries, controls, is controlled by, or is under common control with, such Person. The term
              “control” (including the terms “controlled by” and “under common control with”) means the direct or
              indirect power to direct or cause the direction of the management and policies of a Person, whether
              through the ownership of voting securities, by contract, or otherwise.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Agreement”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in the preamble.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Authorized Users”</dt>
            <dd className="ml-4 text-gray-600">
              means Customer&apos;s employees, consultants, contractors, and agents (a)
              who are authorized by Customer to access and use the Services under the rights granted to Customer
              pursuant to this Agreement; and (b) for whom access to the Services has been purchased hereunder.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Availability Requirement”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 5.1.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Available”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 5.1.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Backup Policy”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 6.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Confidential Information”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 9.1.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Customer”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in the preamble.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Customer Data”</dt>
            <dd className="ml-4 text-gray-600">
              means information, data, and other content, in any form or medium, that
              is collected, downloaded, or otherwise received, directly or indirectly, from Customer or an Authorized
              User by or through the Services or that incorporates or is derived from the Processing of such information,
              data, or content by or through the Services. For the avoidance of doubt, Customer Data does not include
              Resultant Data or any other information reflecting the access or use of the Services by or on behalf of
              Customer or any Authorized User.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Customer Failure”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 4.2.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Customer Indemnitee”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 12.1.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Customer Systems”</dt>
            <dd className="ml-4 text-gray-600">
              means the Customer&apos;s information technology infrastructure, including
              computers, software, hardware, databases, electronic systems (including database management systems),
              and networks, whether operated directly by Customer or through the use of third-party services.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Disclosing Party”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 9.1.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Documentation”</dt>
            <dd className="ml-4 text-gray-600">
              means any manuals, instructions, or other documents or materials that
              the Provider provides or makes available to Customer in any form or medium and which describe the
              functionality, components, features, or requirements of the Services or Provider Materials, including any
              aspect of the installation, configuration, integration, operation, use, support, or maintenance thereof.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Effective Date”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in the preamble.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Exceptions”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 5.1.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Fees”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 8.1.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Force Majeure Event”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 15.9.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Harmful Code”</dt>
            <dd className="ml-4 text-gray-600">
              means any software, hardware, or other technology, device, or means,
              including any virus, worm, malware, or other malicious computer code, the purpose or effect of which is
              to (a) permit unauthorized access to, or to destroy, disrupt, disable, distort, or otherwise harm or impede
              in any manner any (i) computer, software, firmware, hardware, system, or network; or (ii) any application
              or function of any of the foregoing or the security, integrity, confidentiality, or use of any data Processed
              thereby; or (b) prevent Customer or any Authorized User from accessing or using the Services or Provider
              Systems as intended by this Agreement. Harmful Code does not include any Provider Disabling Device.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Indemnitee”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 12.3.</dd>
          </div>
           <div>
            <dt className="font-semibold text-gray-700">“Indemnitor”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 12.3.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Initial Term”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 14.1.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Intellectual Property Rights”</dt>
            <dd className="ml-4 text-gray-600">
              means any and all registered and unregistered rights granted,
              applied for, or otherwise now or hereafter in existence under or related to any patent, copyright,
              trademark, trade secret, database protection, or other intellectual property rights laws, and all similar or
              equivalent rights or forms of protection, in any part of the world.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Law”</dt>
            <dd className="ml-4 text-gray-600">
              means any statute, law, ordinance, regulation, rule, code, order, constitution, treaty,
              common law, judgment, decree, or other requirement of any federal, state, local, or foreign government
              or political subdivision thereof, or any arbitrator, court, or tribunal of competent jurisdiction.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Losses”</dt>
            <dd className="ml-4 text-gray-600">
              means any and all losses, damages, deficiencies, claims, actions, judgments,
              settlements, interest, awards, penalties, fines, costs, or expenses of whatever kind, including reasonable
              attorneys&apos; fees and the costs of enforcing any right to indemnification hereunder and the cost of pursuing
              any insurance providers.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Person”</dt>
            <dd className="ml-4 text-gray-600">
              means an individual, corporation, partnership, joint venture, limited liability entity,
              governmental authority, unincorporated organization, trust, association, or other entity.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Personal Information”</dt>
            <dd className="ml-4 text-gray-600">
              means information that Customer provides or for which Customer
              provides access to Provider, or information which Provider creates or obtains on behalf of Customer, in
              accordance with this Agreement that: (i) directly or indirectly identifies an individual (including, for
              example, names, signatures, addresses, telephone numbers, email addresses, and other unique
              identifiers); or (ii) can be used to authenticate an individual (including, without limitation, employee
              identification numbers, government-issued identification numbers, passwords or PINs, user identification
              and account access credentials or passwords, financial account numbers, credit report information,
              student information, biometric, genetic, health, or health insurance data, answers to security questions,
              and other personal identifiers), in case of both subclauses (i) and (ii), including Sensitive Personal
              Information (as defined herein). Customer&apos;s business contact information is not by itself Personal
              Information.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Process”</dt>
            <dd className="ml-4 text-gray-600">
              means to take any action or perform any operation or set of operations that the
              SaaS Services are capable of taking or performing on any data, information, or other content, including to
              collect, receive, input, upload, download, record, reproduce, store, organize, compile, combine, log,
              catalog, cross-reference, manage, maintain, copy, adapt, alter, translate, or make other derivative works or
              improvements, process, retrieve, output, consult, use, perform, display, disseminate, transmit, submit,
              post, transfer, disclose, or otherwise provide or make available, or block, erase, or destroy.
              “Processing” and “Processed” have correlative meanings.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Provider”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in the preamble.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Provider Disabling Device”</dt>
            <dd className="ml-4 text-gray-600">
              means any software, hardware, or other technology, device, or
              means (including any back door, time bomb, time out, drop dead device, software routine, or other
              disabling device) used by Provider or its designee to disable Customer&apos;s or any Authorized User&apos;s access to
              or use of the Services automatically with the passage of time or under the positive control of Provider or
              its designee.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Provider Indemnitee”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 12.2.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Provider Materials”</dt>
            <dd className="ml-4 text-gray-600">
              means the Services, Specifications, Documentation, and Provider
              Systems and any and all other information, data, documents, materials, works, and other content, devices,
              methods, processes, hardware, software, and other technologies and inventions, including any
              deliverables, technical or functional descriptions, requirements, plans, or reports, that are provided or
              used by Provider or any Subcontractor in connection with the Services or otherwise comprise or relate to
              the Services or Provider Systems. For the avoidance of doubt, Provider Materials include Resultant Data
              and any information, data, or other content derived from Provider&apos;s monitoring of Customer&apos;s access to or
              use of the Services, but do not include Customer Data.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Provider Personnel”</dt>
            <dd className="ml-4 text-gray-600">
              means all individuals involved in the performance of Services as
              employees, agents, or independent contractors of Provider or any Subcontractor.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Provider Systems”</dt>
            <dd className="ml-4 text-gray-600">
              means the information technology infrastructure used by or on behalf of
              Provider in performing the Services, including all computers, software, hardware, databases, electronic
              systems (including database management systems), and networks, whether operated directly by Provider
              or through the use of third-party services.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Receiving Party”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 9.1.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Reimbursable Expenses”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 8.7.</dd>
          </div>
           <div>
            <dt className="font-semibold text-gray-700">“Renewal Term”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 14.2.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Representatives”</dt>
            <dd className="ml-4 text-gray-600">
              means, with respect to a party, that party&apos;s and its Affiliates&apos; employees,
              officers, directors, consultants, agents, independent contractors, service providers, sublicensees,
              subcontractors, and legal advisors.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Resultant Data”</dt>
            <dd className="ml-4 text-gray-600">
              means data and information related to Customer&apos;s use of the Services that
              is used by Provider in an aggregate and anonymized manner, including to compile statistical and
              performance information related to the provision and operation of the Services.
            </dd>
          </div>
           <div>
            <dt className="font-semibold text-gray-700">“Scheduled Downtime”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 5.3.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Sensitive Personal Information”</dt>
            <dd className="ml-4 text-gray-600">
              means an individual&apos;s (i) government-issued identification
              number, including Social Security number, driver&apos;s license number, or state-issued identification number;
              (ii) financial account number, credit report information, or credit, debit, or other payment cardholder
              information, with or without any required security or access code, personal identification number, or
              password that permits access to the individual&apos;s financial account; or (iii) biometric, genetic, health, or
              health insurance data.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Service Allocation”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 3.2.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Service Credit”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 5.2.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Service Level Failure”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 5.1.</dd>
          </div>
           <div>
            <dt className="font-semibold text-gray-700">“Service Period”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 5.1.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Services”</dt>
            <dd className="ml-4 text-gray-600">means the software-as-a-service offering described in Exhibit A.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Specifications”</dt>
            <dd className="ml-4 text-gray-600">means the specifications for the Services set forth in this Agreement.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Subcontractor”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 2.7.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Support Exhibit”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 5.4.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Support Services”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 5.4.</dd>
          </div>
           <div>
            <dt className="font-semibold text-gray-700">“Term”</dt>
            <dd className="ml-4 text-gray-600">has the meaning set forth in 14.1 and/or 14.2.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Territory”</dt>
            <dd className="ml-4 text-gray-600">means the United States of America.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">“Third-Party Materials”</dt>
            <dd className="ml-4 text-gray-600">
              means materials and information, in any form or medium, including
              any open-source or other software, documents, data, content, specifications, products, equipment, or
              components of or relating to the Services that are not proprietary to Provider.
            </dd>
          </div>
        </dl>
      </div>

      {/* Section 4: Use Restrictions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">
          4. Use Restrictions; Service Usage and Data Storage
        </h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Use Restrictions.</h3>
        <p className="mb-4 text-gray-600">
          Customer shall not, and shall not permit any other Person to, access or use the
          Services or Provider Materials except as expressly permitted by this Agreement and, in the case of
          Third-Party Materials, the applicable third-party license agreement. For purposes of clarity and without
          limiting the generality of the foregoing, Customer shall not, except as this Agreement expressly permits:
        </p>
        <ul className="list-none pl-6 space-y-2 mb-4 text-gray-600">
          <li className="flex"><span className="mr-2 font-semibold">(a)</span> copy, modify, or create derivative works or improvements of the Services or Provider Materials;</li>
          <li className="flex"><span className="mr-2 font-semibold">(b)</span> rent, lease, lend, sell, sublicense, assign, distribute, publish, transfer, or otherwise make available any Services or Provider Materials to any Person, including on or in connection with the internet or any time-sharing, service bureau, software as a service, cloud, or other technology or service;</li>
          <li className="flex"><span className="mr-2 font-semibold">(c)</span> reverse engineer, disassemble, decompile, decode, adapt, or otherwise attempt to derive or gain access to the source code of the Services or Provider Materials, in whole or in part;</li>
          <li className="flex"><span className="mr-2 font-semibold">(d)</span> bypass or breach any security device or protection used by the Services or Provider Materials or access or use the Services or Provider Materials other than by an Authorized User through the use of his or her own then valid Access Credentials;</li>
          <li className="flex"><span className="mr-2 font-semibold">(e)</span> input, upload, transmit, or otherwise provide to or through the Services or Provider Systems, any information or materials that are unlawful or injurious, or contain, transmit, or activate any Harmful Code;</li>
          <li className="flex"><span className="mr-2 font-semibold">(f)</span> damage, destroy, disrupt, disable, impair, interfere with, or otherwise impede or harm in any manner the Services, Provider Systems, or Provider&apos;s provision of services to any third party, in whole or in part;</li>
          <li className="flex"><span className="mr-2 font-semibold">(g)</span> remove, delete, alter, or obscure any trademarks, Specifications, Documentation, EULA, warranties, or disclaimers, or any copyright, trademark, patent, or other intellectual property or proprietary rights notices from any Services or Provider Materials, including any copy thereof;</li>
          <li className="flex"><span className="mr-2 font-semibold">(h)</span> access or use the Services or Provider Materials in any manner or for any purpose that infringes, misappropriates, or otherwise violates any Intellectual Property Right or other right of any third party including by any unauthorized access to, misappropriation, use, alteration, destruction, or disclosure of the data of any other Provider customer), or that violates any applicable Law;</li>
          <li className="flex"><span className="mr-2 font-semibold">(i)</span> access or use the Services or Provider Materials for purposes of competitive analysis of the Services or Provider Materials, the development, provision, or use of a competing software service or product or any other purpose that is to the Provider&apos;s detriment or commercial disadvantage;</li>
          <li className="flex"><span className="mr-2 font-semibold">(j)</span> access or use the Services or Provider Materials in, or in association with, the design, construction, maintenance, or operation of any hazardous environments, systems, or applications, any safety response systems or other safety-critical applications, or any other use or application in which the use or failure of the Services could lead to personal injury or severe physical or property damage; or</li>
          <li className="flex"><span className="mr-2 font-semibold">(k)</span> otherwise access or use the Services or Provider Materials beyond the scope of the authorization granted under this Section 3.1.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Service Usage and Data Storage.</h3>
        <p className="mb-4 text-gray-600">
           Exhibit A sets forth Fees for designated levels of usage and data
          storage (each a “Service Allocation”), beginning with the Fees payable by Customer for the levels of usage
          and data storage in effect as of the Effective Date. Provider will use commercially reasonable efforts to
          notify Customer in writing if Customer has reached eighty percent (80%) of its then current Service
          Allocation and Customer may increase its Service Allocation and corresponding Fee obligations in
          accordance with Exhibit A. If Customer exceeds its Service Allocation by more than 100% percent for any
          relevant period, Customer shall also pay to Provider the applicable excess usage and storage Fees set forth
          in Exhibit A. Customer acknowledges that exceeding its then-current Service Allocation may result in
          service degradation for Customer and other Provider customers and agrees that:
        </p>
        <ul className="list-none pl-6 space-y-2 text-gray-600">
          <li className="flex"><span className="mr-2 font-semibold">(l)</span> Provider has no obligation to permit Customer to exceed its then-current Service Allocation; and</li>
          <li className="flex"><span className="mr-2 font-semibold">(m)</span> Customer is not entitled to any Service Level Credits for periods during which Customer exceeds its then-current Service Allocation, regardless of whether the Services fail to meet the Availability Requirement during such period.</li>
        </ul>
      </section>

      {/* Section 5: Customer Obligations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">
          5. CUSTOMER OBLIGATIONS
        </h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Customer Systems and Cooperation.</h3>
        <p className="mb-4 text-gray-600">
          Customer shall at all times during the Term: (a) set up, maintain, and operate in good repair and in accordance with the Specifications all Customer Systems on or through which the Services are accessed or used; (b) provide Provider Personnel with such access to Customer&apos;s premises and Customer Systems as is necessary for Provider to perform the Services in accordance with the Availability Requirement and Specifications; and (c) provide all cooperation and assistance as Provider may reasonably request to enable Provider to exercise its rights and perform its obligations under and in connection with this Agreement.
        </p>
         <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Effect of Customer Failure or Delay.</h3>
        <p className="mb-4 text-gray-600">
          Provider is not responsible or liable for any delay or failure of performance caused in whole or in part by Customer&apos;s delay in performing, or failure to perform, any of its obligations under this Agreement (each, a “Customer Failure”).
        </p>
         <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Corrective Action and Notice.</h3>
        <p className="mb-4 text-gray-600">
          If Customer becomes aware of any actual or threatened activity prohibited by 3.1, Customer shall, and shall cause its Authorized Users to, immediately: (a) take all reasonable and lawful measures within their respective control that are necessary to stop the activity or threatened activity and to mitigate its effects (including, where applicable, by discontinuing and preventing any unauthorized access to the Services and Provider Materials and permanently erasing from their systems and destroying any data to which any of them have gained unauthorized access); and (b) notify Provider of any such actual or threatened activity.
        </p>
         <h3 className="text-xl font-semibold text-gray-800 mb-3">5.4 Non-Solicitation.</h3>
        <p className="mb-4 text-gray-600">
          During the Term and for three (3) years after, Customer shall not, and shall not assist any other Person to, directly or indirectly, recruit or solicit for employment or engagement as an independent contractor any Person then or within the prior twelve (12) months employed or engaged by Provider or any Subcontractor and involved in any respect with the Services or the performance of this Agreement. In the event of a violation of this Section 4.4, Provider will be entitled to liquidated damages equal to the compensation paid by Provider to the applicable employee or contractor during the prior twelve (12) months.
        </p>
      </section>

      {/* Section 6: Service Levels and Credits */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">
          6. Service Levels and Credits
        </h2>
         <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Service Levels.</h3>
         <p className="mb-4 text-gray-600">
            Subject to the terms and conditions of this Agreement, Provider will use commercially reasonable efforts to make the Services Available at least ninety-nine and one half percent (99.5%) of the time as measured over the course of each calendar month during the Term (each such calendar month, a “Service Period”), excluding unavailability as a result of any of the Exceptions described below in this Section 5.1 (the “Availability Requirement”). “Service Level Failure” means a material failure of the Services to meet the Availability Requirement. “Available” means the Services are available for access and use by Customer and its Authorized Users over the Internet and operating in material accordance with the Specifications. For purposes of calculating the Availability Requirement, the following are “Exceptions” to the Availability Requirement, and neither the Services will be considered un-Available nor any Service Level Failure be deemed to occur in connection with any failure to meet the Availability Requirement or impaired ability of Customer or its Authorized Users to access or use the Services that is due, in whole or in part, to any: (a) act or omission by Customer or any Authorized User/access to or use of the Services by Customer or any Authorized User, or using Customer&apos;s or an Authorized User&apos;s Access Credentials, that does not strictly comply with this Agreement and the Specifications; (b) Customer Failure; (c) Customer&apos;s or its Authorized User&apos;s Internet connectivity; (d) Force Majeure Event; (e) failure, interruption, outage, or other problem with any software, hardware, system, network, facility, or other matter not supplied by Provider pursuant to this Agreement; (f) Scheduled Downtime; or (g) disabling, suspension, or termination of the Services pursuant to 2.8.
         </p>
         <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Service Level Failures and Remedies.</h3>
         <p className="mb-4 text-gray-600">
            In the event of a Service Level Failure, Provider shall issue a credit to Customer in the amount of ten percent (10%) of the monthly Fees for the Services due for the Service Period the Service Level Failure occurred (each a “Service Credit”), subject to the following:
         </p>
         <ul className="list-none pl-6 space-y-2 mb-4 text-gray-600">
            <li className="flex"><span className="mr-2 font-semibold">(a)</span> Provider has no obligation to issue any Service Credit unless: (i) Customer reports the Service Failure to Provider immediately on becoming aware of it; and (ii) requests such Service Credit in writing within five (5) days of the Service Level Failure; and</li>
            <li className="flex"><span className="mr-2 font-semibold">(b)</span> in no event will a Service Level Credit for any Service Period exceed ten percent (10%) of the total Fees that would be payable for that Service Period if no Service Level Failure had occurred.</li>
         </ul>
         <p className="mb-4 text-gray-600">
           Any Service Credit payable to Customer under this Agreement will be issued to Customer in the calendar month following the Service Period in which the Service Level Failure occurred. This 5.2 sets forth Provider&apos;s sole obligation and liability and Customer&apos;s sole remedy for any Service Level Failure.
         </p>
         <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Scheduled Downtime.</h3>
         <p className="mb-4 text-gray-600">
            Provider will use commercially reasonable efforts to schedule downtime for routine maintenance of the Services between the hours of 12:00 a.m. and 3:00 a.m., Eastern Standard Time (“Scheduled Downtime”).
         </p>
         <h3 className="text-xl font-semibold text-gray-800 mb-3">6.4 Service Support.</h3>
         <p className="mb-4 text-gray-600">
            The Services include Provider&apos;s standard customer support services (“Support Services”) in accordance with the Provider service support schedule then in effect, a current copy of which is available at https://carfilio.com/support (or a successor website address) (the “Support Exhibit”). Provider may amend the Support Exhibit from time to time in its sole discretion.
         </p>
      </section>

      {/* Section 7: Data Backup */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">
          7. Data Backup
        </h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1</h3>
        <p className="mb-4 text-gray-600">
          The Services do not replace the need for Customer to maintain regular data backups or redundant data archives.
          <strong className="block uppercase mt-2 text-red-600 font-bold">
            PROVIDER HAS NO OBLIGATION OR LIABILITY FOR ANY LOSS, ALTERATION, DESTRUCTION, DAMAGE, CORRUPTION, OR RECOVERY OF CUSTOMER DATA.
          </strong>
        </p>
      </section>

      {/* Section 8: Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">
          8. Security
        </h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Information Security.</h3>
        <p className="mb-4 text-gray-600">
          Provider will employ security measures in accordance with Provider&apos;s data privacy and security policy as amended from time to time.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Data Breach Procedures.</h3>
        <p className="mb-4 text-gray-600">
          Provider maintains a data breach plan and shall implement the procedures required under such data breach plan on the occurrence of a data breach (as defined in such plan).
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">8.3 Customer Control and Responsibility.</h3>
        <p className="mb-4 text-gray-600">
          Customer has and will retain sole responsibility for: (a) all Customer Data, including its content and use; (b) all information, instructions, and materials provided by or on behalf of Customer or any Authorized User in connection with the Services; (c) Customer&apos;s information technology infrastructure, including computers, software, databases, electronic systems (including database management systems), and networks, whether operated directly by Customer or through the use of third-party services (“Customer Systems”); (d) the security and use of Customer&apos;s and its Authorized Users&apos; Access Credentials; and (e) all access to and use of the Services and Provider Materials directly or indirectly by or through the Customer Systems or its or its Authorized Users&apos; Access Credentials, with or without Customer&apos;s knowledge or consent, including all results obtained from, and all conclusions, decisions, and actions based on, such access or use.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">8.4 Access and Security.</h3>
        <p className="mb-4 text-gray-600">
          Customer shall employ all physical, administrative, and technical controls, screening, and security procedures and other safeguards necessary to: (a) securely administer the distribution and use of all Access Credentials and protect against any unauthorized access to or use of the Services; and (b) control the content and use of Customer Data, including the uploading or other provision of Customer Data for Processing by the Services.
        </p>
      </section>

       {/* Section 10: Confidentiality */}
       <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">
             10. Confidentiality
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">10.1 Confidential Information.</h3>
          <p className="mb-4 text-gray-600">
            In connection with this Agreement each party (as the “Disclosing Party”) may disclose or make available Confidential Information to the other party (as the “Receiving Party”). Subject to 9.2, “Confidential Information” means information in any form or medium (whether oral, written, electronic, or other) that the Disclosing Party considers confidential or proprietary, including information consisting of or relating to the Disclosing Party&apos;s technology, trade secrets, know-how, business operations, plans, strategies, customers, and any other categories, and pricing, and information with respect to which the Disclosing Party has contractual or other confidentiality obligations, in each case whether or not marked, designated, or otherwise identified as “confidential.” Without limiting the foregoing: all Provider Materials are the Confidential Information of Provider and the financial terms and existence of this Agreement are the Confidential Information of Provider.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">10.2 Exclusions.</h3>
          <p className="mb-4 text-gray-600">
            Confidential Information does not include information that the Receiving Party can demonstrate by written or other documentary records:
          </p>
          <ul className="list-none pl-6 space-y-2 mb-4 text-gray-600">
            <li className="flex"><span className="mr-2 font-semibold">(a)</span> was rightfully known to the Receiving Party without restriction on use or disclosure prior to such information&apos;s being disclosed or made available to the Receiving Party in connection with this Agreement;</li>
            <li className="flex"><span className="mr-2 font-semibold">(b)</span> was or becomes generally known by the public other than by the Receiving Party&apos;s or any of its Representatives&apos; noncompliance with this Agreement;</li>
            <li className="flex"><span className="mr-2 font-semibold">(c)</span> was or is received by the Receiving Party on a non-confidential basis from a third party that, to the Receiving Party&apos;s knowledge, was not or is not, at the time of such receipt, under any obligation to maintain its confidentiality; or</li>
            <li className="flex"><span className="mr-2 font-semibold">(d)</span> the Receiving Party can demonstrate by written or other documentary records was or is independently developed by the Receiving Party without reference to or use of any Confidential Information.</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">10.3 Protection of Confidential Information.</h3>
          <p className="mb-4 text-gray-600">
            As a condition to being provided with any disclosure of or access to Confidential Information, the Receiving Party shall:
          </p>
          <ul className="list-none pl-6 space-y-2 mb-4 text-gray-600">
             <li className="flex"><span className="mr-2 font-semibold">(a)</span> not access or use Confidential Information other than as necessary to exercise its rights or perform its obligations under and in accordance with this Agreement;</li>
             <li className="flex"><span className="mr-2 font-semibold">(b)</span> except as may be permitted by and subject to its compliance with 9.4, not disclose or permit access to Confidential Information other than to its Representatives who: (i) need to know such Confidential Information for purposes of the Receiving Party&apos;s exercise of its rights or performance of its obligations under and in accordance with this Agreement; (ii) have been informed of the confidential nature of the Confidential Information and the Receiving Party&apos;s obligations under this 9.3; and (iii) are bound by written confidentiality and restricted use obligations at least as protective of the Confidential Information as the terms set forth in this 9;</li>
             <li className="flex"><span className="mr-2 font-semibold">(c)</span> safeguard the Confidential Information from unauthorized use, access, or disclosure using at least the degree of care it uses to protect its similarly sensitive information and in no event less than a reasonable degree of care;</li>
             <li className="flex"><span className="mr-2 font-semibold">(d)</span> promptly notify the Disclosing Party of any unauthorized use or disclosure of Confidential Information and take all reasonable steps to prevent further unauthorized use or disclosure; and</li>
             <li className="flex"><span className="mr-2 font-semibold">(e)</span> ensure its Representatives&apos; compliance with, and be responsible and liable for any of its Representatives&apos; non-compliance with, the terms of this 9.</li>
             <li className="flex"><span className="mr-2 font-semibold">(f)</span> Notwithstanding any other provisions of this Agreement, the Receiving Party&apos;s obligations under this 9 with respect to any Confidential Information that constitutes a trade secret under any applicable Law will continue until such time, if ever, as such Confidential Information ceases to qualify for trade secret protection under one or more such applicable Laws other than as a result of any act or omission of the Receiving Party or any of its Representatives.</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">10.4 Compelled Disclosures.</h3>
          <p className="mb-4 text-gray-600">
            If the Receiving Party or any of its Representatives is compelled by applicable Law to disclose any Confidential Information then, to the extent permitted by applicable Law, the Receiving Party shall: (a) promptly, and prior to such disclosure, notify the Disclosing Party in writing of such requirement so that the Disclosing Party can seek a protective order or other remedy or waive its rights under 9.3; and (b) provide reasonable assistance to the Disclosing Party, at the Disclosing Party&apos;s sole cost and expense, in opposing such disclosure or seeking a protective order or other limitations on disclosure. If the Disclosing Party waives compliance or, after providing the notice and assistance required under this 9.4, the Receiving Party remains required by Law to disclose any Confidential Information, the Receiving Party shall disclose only that portion of the Confidential Information that, on the advice of the Receiving Party&apos;s outside legal counsel, the Receiving Party is legally required to disclose and, on the Disclosing Party&apos;s request, shall use commercially reasonable efforts to obtain assurances from the applicable court or other presiding authority that such Confidential Information will be afforded confidential treatment.
          </p>
       </section>

       {/* Section 11: Intellectual Property Rights */}
       <section className="mb-8">
         <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">
            11. Intellectual Property Rights
         </h2>
         <h3 className="text-xl font-semibold text-gray-800 mb-3">11.1 Provider Materials.</h3>
         <p className="mb-4 text-gray-600">
            All right, title, and interest in and to the Provider Materials, including all Intellectual Property Rights therein, are and will remain with Provider and, with respect to Third-Party Materials, the applicable third-party providers own all right, title, and interest, including all Intellectual Property Rights, in and to the Third-Party Materials. Customer has no right, license, or authorization with respect to any of the Provider Materials except as expressly set forth in 2.1 or the applicable third-party license, in each case subject to 3.1. All other rights in and to the Provider Materials are expressly reserved by Provider. In furtherance of the foregoing, Customer hereby unconditionally and irrevocably grants to Provider an assignment of all right, title, and interest in and to the Resultant Data, including all Intellectual Property Rights relating thereto.
         </p>
         <h3 className="text-xl font-semibold text-gray-800 mb-3">11.2 Customer Data.</h3>
         <p className="mb-4 text-gray-600">
            As between Customer and Provider, Customer is and will remain the sole and exclusive owner of all right, title, and interest in and to all Customer Data, including all Intellectual Property Rights relating thereto, subject to the rights and permissions granted in 10.3.
         </p>
         <h3 className="text-xl font-semibold text-gray-800 mb-3">11.3 Consent to Use Customer Data.</h3>
         <p className="mb-4 text-gray-600">
            Customer hereby irrevocably grants all such rights and permissions in or relating to Customer Data as are necessary or useful to Provider, its Subcontractors, and the Provider Personnel to enforce this Agreement and exercise Provider&apos;s, its Subcontractors&apos;, and the Provider Personnel&apos;s rights and perform Provider&apos;s, its Subcontractors&apos;, and the Provider Personnel&apos;s obligations hereunder.
         </p>
         <h3 className="text-xl font-semibold text-gray-800 mb-3">11.4 DISCLAIMER OF WARRANTIES.</h3>
         <p className="mb-4 text-gray-600 uppercase font-bold ">
           EXCEPT FOR THE EXPRESS WARRANTIES SET FORTH IN 11.1 AND 11.2, ALL SERVICES AND PROVIDER MATERIALS ARE PROVIDED “AS IS.” PROVIDER SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY , FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND ALL WARRANTIES ARISING FROM COURSE OF DEALING, USAGE, OR TRADE PRACTICE. WITHOUT LIMITING THE FOREGOING, PROVIDER MAKES NO WARRANTY OF ANY KIND THAT THE SERVICES OR PROVIDER MATERIALS, OR ANY PRODUCTS OR RESULTS OF THE USE THEREOF, WILL MEET CUSTOMER&apos;S OR ANY OTHER PERSON&apos;S REQUIREMENTS, OPERATE WITHOUT INTERRUPTION, ACHIEVE ANY INTENDED RESULT, BE COMPATIBLE OR WORK WITH ANY SOFTWARE, SYSTEM, OR OTHER SERVICES, OR BE SECURE, ACCURATE, COMPLETE, FREE OF HARMFUL CODE, OR ERROR FREE. ALL THIRD-PARTY MATERIALS ARE PROVIDED “AS IS” AND ANY REPRESENTATION OR WARRANTY OF OR CONCERNING ANY THIRD-PARTY MATERIALS IS STRICTLY BETWEEN CUSTOMER AND THE THIRD-PARTY OWNER OR DISTRIBUTOR OF THE THIRD-PARTY MATERIALS.
         </p>
       </section>

       {/* Section 12: Representations and Warranties */}
       <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">
             12. Representations and Warranties
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">12.1 Mutual Representations and Warranties.</h3>
          <p className="mb-4 text-gray-600">
             Each party represents and warrants to the other party that:
          </p>
          <ul className="list-none pl-6 space-y-2 mb-4 text-gray-600">
            <li className="flex"><span className="mr-2 font-semibold">(a)</span> it is duly organized, validly existing, and in good standing as a corporation or other entity under the Laws of the jurisdiction of its incorporation or other organization;</li>
            <li className="flex"><span className="mr-2 font-semibold">(b)</span> it has the full right, power, and authority to enter into and perform its obligations and grant the rights, licenses, consents, and authorizations it grants or is required to grant under this Agreement;</li>
            <li className="flex"><span className="mr-2 font-semibold">(c)</span> the execution of this Agreement by its representative whose signature is set forth at the end of this Agreement has been duly authorized by all necessary corporate or organizational action of such party; and</li>
            <li className="flex"><span className="mr-2 font-semibold">(d)</span> when executed and delivered by both parties, this Agreement will constitute the legal, valid, and binding obligation of such party, enforceable against such party in accordance with its terms.</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">12.2 Additional Provider Representations, Warranties, and Covenants.</h3>
          <p className="mb-4 text-gray-600">
             Provider represents, warrants, and covenants to Customer that Provider will perform the Services using personnel of required skill, experience, and qualifications and in a professional and workmanlike manner in accordance with generally recognized industry standards for similar services and will devote adequate resources to meet its obligations under this Agreement.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">12.3 Additional Customer Representations, Warranties, and Covenants.</h3>
          <p className="mb-4 text-gray-600">
             Customer represents, warrants, and covenants to Provider that Customer owns or otherwise has and will have the necessary rights and consents in and relating to the Customer Data so that, as received by Provider and Processed in accordance with this Agreement, they do not and will not infringe, misappropriate, or otherwise violate any Intellectual Property Rights, or any privacy or other rights of any third party or violate any applicable Law.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">12.4 DISCLAIMER OF WARRANTIES.</h3>
          <p className="mb-4 text-gray-600 uppercase font-bold ">
             EXCEPT FOR THE EXPRESS WARRANTIES SET FORTH IN 11.1 AND 11.2, ALL SERVICES AND PROVIDER MATERIALS ARE PROVIDED “AS IS.” PROVIDER SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY , FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND ALL WARRANTIES ARISING FROM COURSE OF DEALING, USAGE, OR TRADE PRACTICE. WITHOUT LIMITING THE FOREGOING, PROVIDER MAKES NO WARRANTY OF ANY KIND THAT THE SERVICES OR PROVIDER MATERIALS, OR ANY PRODUCTS OR RESULTS OF THE USE THEREOF, WILL MEET CUSTOMER&apos;S OR ANY OTHER PERSON&apos;S REQUIREMENTS, OPERATE WITHOUT INTERRUPTION, ACHIEVE ANY INTENDED RESULT, BE COMPATIBLE OR WORK WITH ANY SOFTWARE, SYSTEM, OR OTHER SERVICES, OR BE SECURE, ACCURATE, COMPLETE, FREE OF HARMFUL CODE, OR ERROR FREE. ALL THIRD-PARTY MATERIALS ARE PROVIDED “AS IS” AND ANY REPRESENTATION OR WARRANTY OF OR CONCERNING ANY THIRD-PARTY MATERIALS IS STRICTLY BETWEEN CUSTOMER AND THE THIRD-PARTY OWNER OR DISTRIBUTOR OF THE THIRD-PARTY MATERIALS.
          </p>
       </section>

        {/* Section 13: Indemnification (Assuming numbers restart/typo in original) */}
       <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">
             13. Indemnification
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">13.1 Provider Indemnification.</h3>
          <p className="mb-4 text-gray-600">
             Provider shall indemnify, defend, and hold harmless Customer from and against any and all Losses incurred by Customer resulting from any Action by a third party (other than an Affiliate of a Customer) that Customer&apos;s use of the Services (excluding Customer Data and Third-Party Materials) in accordance with this Agreement (including the Specifications) infringes or misappropriates such third party&apos;s US Intellectual Property Rights and/or US patents, copyrights, or trade secrets in the Territory. The foregoing obligation does not apply to the extent that the alleged infringement arises from:
          </p>
          <ul className="list-none pl-6 space-y-2 mb-4 text-gray-600">
            <li className="flex"><span className="mr-2 font-semibold">(a)</span> Third-Party Materials or Customer Data;</li>
            <li className="flex"><span className="mr-2 font-semibold">(b)</span> access to or use of the Provider Materials in combination with any hardware, system, software, network, or other materials or service not provided by Provider or specified for Customer&apos;s use in the Documentation, unless otherwise expressly permitted by Provider in writing;</li>
            <li className="flex"><span className="mr-2 font-semibold">(c)</span> modification of the Provider Materials other than: (i) by or on behalf of Provider; or (ii) with Provider&apos;s written approval in accordance with Provider&apos;s written specification;</li>
            <li className="flex"><span className="mr-2 font-semibold">(d)</span> failure to timely implement any modifications, upgrades, replacements, or enhancements made available to Customer by or on behalf of Provider; or</li>
            <li className="flex"><span className="mr-2 font-semibold">(e)</span> act, omission, or other matter described in 12.2(a), 12.2(b), 12.2(c), or 12.2(d), whether or not the same results in any Action against or Losses by any Provider Indemnitee.</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">13.2 Customer Indemnification.</h3>
          <p className="mb-4 text-gray-600">
             Customer shall indemnify, defend, and hold harmless Provider and its Subcontractors and Affiliates, and each of its and their respective officers, directors, employees, agents, successors, and assigns (each, a “Provider Indemnitee”) from and against any and all Losses incurred by such Provider Indemnitee resulting from any Action by a third party (other than an Affiliate of a Provider Indemnitee) to the extent that such Losses arise out of or result from, or are alleged to arise out of or result from:
          </p>
           <ul className="list-none pl-6 space-y-2 mb-4 text-gray-600">
             <li className="flex"><span className="mr-2 font-semibold">(f)</span> Customer Data, including any Processing of Customer Data by or on behalf of Provider in accordance with this Agreement;</li>
             <li className="flex"><span className="mr-2 font-semibold">(g)</span> any other materials or information (including any documents, data, specifications, software, content, or technology) provided by or on behalf of Customer or any Authorized User, including Provider&apos;s compliance with any specifications or directions provided by or on behalf of Customer or any Authorized User to the extent prepared without any contribution by Provider;</li>
             <li className="flex"><span className="mr-2 font-semibold">(h)</span> allegation of facts that, if true, would constitute Customer&apos;s breach of any of its representations, warranties, covenants, or obligations under this Agreement; or</li>
             <li className="flex"><span className="mr-2 font-semibold">(i)</span> gross negligence or more culpable act or omission (including recklessness or willful misconduct) by Customer, any Authorized User, or any third party on behalf of Customer or any Authorized User, in connection with this Agreement.</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">13.3 Indemnification Procedure.</h3>
          <p className="mb-4 text-gray-600">
             Each party shall promptly notify the other party in writing of any Action for which such party believes it is entitled to be indemnified pursuant to 12.1 or 12.2, as the case may be. The party seeking indemnification (the “Indemnitee”) shall cooperate with the other party (the “Indemnitor”) at the Indemnitor&apos;s sole cost and expense. The Indemnitor shall promptly assume control of the defense and shall employ counsel reasonably acceptable to the Indemnitee to handle and defend the same, at the Indemnitor&apos;s sole cost and expense. The Indemnitee may participate in and observe the proceedings at its own cost and expense with counsel of its own choosing. The Indemnitor shall not settle any Action on any terms or in any manner that adversely affects the rights of any Indemnitee without the Indemnitee&apos;s prior written consent, which shall not be unreasonably withheld or delayed. If the Indemnitor fails or refuses to assume control of the defense of such Action, the Indemnitee shall have the right, but no obligation, to defend against such Action, including settling such Action after giving notice to the Indemnitor, in each case in such manner and on such terms as the Indemnitee may deem appropriate. The Indemnitee&apos;s failure to perform any obligations under this Section 12.3 will not relieve the Indemnitor of its obligations under this 12, except to the extent that the Indemnitor can demonstrate that it has been materially prejudiced as a result of such failure.
          </p>
           <h3 className="text-xl font-semibold text-gray-800 mb-3">13.4 Mitigation.</h3>
          <p className="mb-4 text-gray-600">
             If any of the Services or Provider Materials are, or in Provider&apos;s opinion are likely to be, claimed to infringe, misappropriate, or otherwise violate any third-party Intellectual Property Right, or if Customer&apos;s or any Authorized User&apos;s use of the Services or Provider Materials is enjoined or threatened to be enjoined, Provider may, at its option and sole cost and expense:
          </p>
           <ul className="list-none pl-6 space-y-2 mb-4 text-gray-600">
             <li className="flex"><span className="mr-2 font-semibold">(j)</span> obtain the right for Customer to continue to use the Services and Provider Materials materially as contemplated by this Agreement;</li>
             <li className="flex"><span className="mr-2 font-semibold">(k)</span> modify or replace the Services and Provider Materials, in whole or in part, to seek to make the Services and Provider Materials (as so modified or replaced) non-infringing, while providing materially equivalent features and functionality, in which case such modifications or replacements will constitute Services and Provider Materials, as applicable, under this Agreement; or</li>
             <li className="flex"><span className="mr-2 font-semibold">(l)</span> by written notice to Customer, terminate this Agreement with respect to all or part of the Services and Provider Materials, and require Customer to immediately cease any use of the Services and Provider Materials or any specified part or feature thereof, provided that if such termination occurs prior to one (1) year after the Effective Date, subject to Customer&apos;s compliance with its post-termination obligations set forth in 14.4, Customer will be entitled to a refund of ten percent (10%) of the total fees paid.</li>
           </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">13.5 Sole Remedy.</h3>
          <p className="mb-4 text-gray-600 uppercase font-bold ">
             THIS SECTION 12 SETS FORTH CUSTOMER&apos;S SOLE REMEDIES AND PROVIDER&apos;S SOLE LIABILITY AND OBLIGATION FOR ANY ACTUAL, THREATENED, OR ALLEGED CLAIMS THAT THE SERVICES AND PROVIDER MATERIALS OR ANY SUBJECT MATTER OF THIS AGREEMENT INFRINGES, MISAPPROPRIATES, OR OTHERWISE VIOLATES ANY INTELLECTUAL PROPERTY RIGHTS OF ANY THIRD PARTY .
          </p>
       </section>

       {/* Section 14: Limitations of Liability (Assuming numbers restart/typo in original) */}
       <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">
             14. Limitations of Liability
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">14.1 EXCLUSION OF DAMAGES.</h3>
          <p className="mb-4 text-gray-600 uppercase font-bold ">
             EXCEPT AS OTHERWISE PROVIDED IN 13.3, IN NO EVENT WILL PROVIDER OR ANY OF ITS LICENSORS, SERVICE PROVIDERS, OR SUPPLIERS BE LIABLE UNDER OR IN CONNECTION WITH THIS AGREEMENT OR ITS SUBJECT MATTER UNDER ANY LEGAL OR EQUITABLE THEORY , INCLUDING BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY , AND OTHERWISE, FOR ANY: (a) LOSS OF PRODUCTION, USE, BUSINESS, REVENUE, OR PROFIT OR DIMINUTION IN VALUE; (b) IMPAIRMENT, INABILITY TO USE OR LOSS, INTERRUPTION, OR DELAY OF THE SERVICES, OTHER THAN FOR THE ISSUANCE OF ANY APPLICABLE SERVICE CREDITS PURSUANT TO 5.2; (c) LOSS, DAMAGE, CORRUPTION, OR RECOVERY OF DATA, OR BREACH OF DATA OR SYSTEM SECURITY; (d) COST OF REPLACEMENT GOODS OR SERVICES; (e) LOSS OF GOODWILL OR REPUTATION; OR (f) CONSEQUENTIAL, INCIDENTAL, INDIRECT, EXEMPLARY , SPECIAL, ENHANCED, OR PUNITIVE DAMAGES, REGARDLESS OF WHETHER SUCH PERSONS WERE ADVISED OF THE POSSIBILITY OF SUCH LOSSES OR DAMAGES OR SUCH LOSSES OR DAMAGES WERE OTHERWISE FORESEEABLE, AND NOTWITHSTANDING THE FAILURE OF ANY AGREED OR OTHER REMEDY OF ITS ESSENTIAL PURPOSE.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">14.2 CAP ON MONETARY LIABILITY.</h3>
          <p className="mb-4 text-gray-600 uppercase font-bold ">
             EXCEPT AS OTHERWISE PROVIDED IN 13.3, IN NO EVENT WILL THE COLLECTIVE AGGREGATE LIABILITY OF PROVIDER AND ITS LICENSORS, SERVICE PROVIDERS, AND SUPPLIERS ARISING OUT OF OR RELATED TO THIS AGREEMENT, WHETHER ARISING UNDER OR RELATED TO BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY , OR ANY OTHER LEGAL OR EQUITABLE THEORY , EXCEED TWO (2) TIMES THE TOTAL AMOUNTS PAID TO PROVIDER UNDER THIS AGREEMENT IN THE ONE (1) YEAR PERIOD PRECEDING THE EVENT GIVING RISE TO THE CLAIM. THE FOREGOING LIMITATIONS APPLY EVEN IF ANY REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">14.3 Exceptions.</h3>
          <p className="mb-4 text-gray-600">
             The exclusions and limitations in 13.1 and 13.2 do not apply to Provider&apos;s obligations under 12 or liability for Provider&apos;s gross negligence or willful misconduct.
          </p>
           {/* Note: Original Section 14.4 Effect of Termination or Expiration moved to Section 15.4 */}
           {/* Note: Original Section 14.5 Surviving Terms moved to Section 15.5 */}
       </section>

        {/* Section 15: Term and Termination */}
       <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">
             15. Term and Termination
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">15.1 Initial Term.</h3>
          <p className="mb-4 text-gray-600">
             The initial term of this Agreement commences as of the Effective Date and, unless terminated earlier pursuant any of the Agreement&apos;s express provisions, will continue in effect until one (1) year from such date (the “Initial Term”).
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">15.2 Renewal Term.</h3>
          <p className="mb-4 text-gray-600">
             This Agreement will automatically renew for up to one (1) additional successive one (1) year terms unless earlier terminated pursuant to this Agreement&apos;s express provisions or either party gives the other party written notice of non-renewal at least sixty (60) days&apos; prior to the expiration of the then-current term (each a “Renewal Term” and, collectively, together with the Initial Term, the “Term”).
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">15.3 Termination.</h3>
          <p className="mb-4 text-gray-600">
            In addition to any other express termination right set forth elsewhere in this Agreement:
          </p>
          <ul className="list-none pl-6 space-y-2 mb-4 text-gray-600">
            <li className="flex"><span className="mr-2 font-semibold">(a)</span> Provider may terminate this Agreement, effective on written notice to Customer, if Customer: (i) fails to pay any amount when due hereunder, and such failure continues more than thirty (30) days after Provider&apos;s delivery of written notice thereof; or (ii) breaches any of its obligations under 3.1, 7.3, or 9;</li>
            <li className="flex"><span className="mr-2 font-semibold">(b)</span> either party may terminate this Agreement, effective on written notice to the other party, if the other party materially breaches this Agreement, and such breach: (i) is incapable of cure; or (ii) being capable of cure, remains uncured thirty (30) days after the non-breaching party provides the breaching party with written notice of such breach; and</li>
            <li className="flex"><span className="mr-2 font-semibold">(c)</span> either party may terminate this Agreement, effective immediately upon written notice to the other party, if the other party: (i) becomes insolvent or is generally unable to pay, or fails to pay, its debts as they become due; (ii) files, or has filed against it, a petition for voluntary or involuntary bankruptcy or otherwise becomes subject, voluntarily or involuntarily, to any proceeding under any domestic or foreign bankruptcy or insolvency Law; (iii) makes or seeks to make a general assignment for the benefit of its creditors; or (iv) applies for or has appointed a receiver, trustee, custodian, or similar agent appointed by order of any court of competent jurisdiction to take charge of or sell any material portion of its property or business.</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">15.4 Effect of Termination or Expiration.</h3>
          <p className="mb-4 text-gray-600">
             Upon any expiration or termination of this Agreement, except as expressly otherwise provided in this Agreement:
          </p>
           <ul className="list-none pl-6 space-y-2 mb-4 text-gray-600">
             <li className="flex"><span className="mr-2 font-semibold">(d)</span> all rights, licenses, consents, and authorizations granted by either party to the other hereunder will immediately terminate;</li>
             <li className="flex"><span className="mr-2 font-semibold">(e)</span> Provider shall immediately cease all use of any Customer Data or Customer&apos;s Confidential Information and (i) promptly, but in no event later than five (5) days return to Customer, or at Customer&apos;s written request destroy, all documents and tangible materials containing, reflecting, incorporating, or based on Customer Data or Customer&apos;s Confidential Information; and (ii) permanently erase all Customer Data and Customer&apos;s Confidential Information from all systems Provider directly or indirectly controls, provided that, for clarity, Provider&apos;s obligations under this Section 14.4(b) do not apply to any Resultant Data;</li>
             <li className="flex"><span className="mr-2 font-semibold">(f)</span> Customer shall immediately cease all use of any Services or Provider Materials and (i) promptly, but no later than five (5) days return to Provider, or at Provider&apos;s written request destroy, all documents and tangible materials containing, reflecting, incorporating, or based on any Provider Materials or Provider&apos;s Confidential Information; and (ii) permanently erase all Provider Materials and Provider&apos;s Confidential Information from all systems Customer directly or indirectly controls; and (iii) certify to Provider in a signed and notarized sworn written instrument that it has complied with the requirements of this Section 14.4(c);</li>
             <li className="flex"><span className="mr-2 font-semibold">(g)</span> notwithstanding anything to the contrary in this Agreement, with respect to information and materials then in its possession or control: (i) the Receiving Party may retain the Disclosing Party&apos;s Confidential Information; (ii) Provider may retain Customer Data; (iii) Customer may retain Provider Materials, in the case of each of subclause (i), (ii) and (iii) in its then current state and solely to the extent and for so long as required by applicable Law; (iv) Provider may also retain Customer Data in its backups, archives, and disaster recovery systems until such Customer Data is deleted in the ordinary course; and (v) all information and materials described in this Section 14.4(d) will remain subject to all confidentiality, security, and other applicable requirements of this Agreement;</li>
             <li className="flex"><span className="mr-2 font-semibold">(h)</span> Provider may disable all Customer and Authorized User access to the Provider Materials;</li>
             <li className="flex"><span className="mr-2 font-semibold">(i)</span> if Customer terminates this Agreement pursuant to 14.3(b), Customer will be relieved of any obligation to pay any Fees attributable to the period after the effective date of such termination and Provider will: (i) refund to Customer Fees paid in advance for Services that Provider has not performed as of the effective date of termination; and (ii) pay to Customer any unpaid Service Credits to which Customer is entitled;</li>
             <li className="flex"><span className="mr-2 font-semibold">(j)</span> if Provider terminates this Agreement pursuant to 14.3(a) or 14.3(b), all Fees that would have become payable had the Agreement remained in effect until expiration of the Term will become immediately due and payable, and Customer shall pay such Fees, together with all previously accrued but not yet paid Fees and Reimbursable Expenses, on receipt of Provider&apos;s invoice therefor;</li>
             <li className="flex"><span className="mr-2 font-semibold">(k)</span> if Customer requests in writing at least thirty (30) days prior to the effective date of expiration or termination, subject to 14.4(d), Provider shall, within sixty (60) days following such expiration or termination, deliver to Customer the then most recent version of Customer Data maintained by Provider, provided that Customer has at that time paid all Fees and Reimbursable Expenses then outstanding and any amounts payable after or as a result of such expiration or termination, including any expenses and fees, on a time and materials basis, for Provider&apos;s services in transferring such Customer Data.</li>
           </ul>
           <h3 className="text-xl font-semibold text-gray-800 mb-3">15.5 Surviving Terms.</h3>
           <p className="mb-4 text-gray-600">
             The provisions set forth in the following sections, and any other right or obligation of the parties in this Agreement that, by its nature, should survive termination or expiration of this Agreement, will survive any expiration or termination of this Agreement: 3.1, 9, 11.4, 12, 13, 14.4, this 14.5, and 15.
           </p>
       </section>

       {/* Exhibit A */}
       <section className="mb-8 w-full">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">
             EXHIBIT A - SERVICES AND FEES
          </h2>
          <p className="mb-2 text-gray-600"><strong className="text-gray-700">Service:</strong> Carfilio - Affiliate/referral marketing software for car dealerships</p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-gray-600">
            <li>Basic Service Package - $695 + tax</li>
            <li>Premium Service Package - $795 + tax</li>
            <li>Elite Service Package - $895 + tax</li>
          </ul>
           <p className="mb-2 text-gray-600"><strong className="text-gray-700">One-time Setup:</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>$495 - Carfilio software setup and integration</li>
          </ul>
       </section>

       {/* Exhibit B */}
       <section className="w-full">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">
             EXHIBIT B - SUPPORT
          </h2>
           <p className="mb-2 text-gray-600"><strong className="text-gray-700">Support Channels:</strong> Email/Phone Support</p>
           <p className="text-gray-600"><strong className="text-gray-700">Support Hours:</strong> Support is Monday - Friday 9AM - 5PM</p>
       </section>

    </div>
  </div>
  )
}

export default TermsAndConditions