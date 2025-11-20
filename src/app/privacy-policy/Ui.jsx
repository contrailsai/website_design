"use client"; // Required for using hooks and framer-motion

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";

// A subtle animation for elements to fade and slide in from below
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

// A container variant to orchestrate staggered animations for its children
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Delay between each child animation
        },
    },
};

const PrivacyPolicy = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-blue-800 to-black/20 md:px-15 overflow-x-hidden">
                <Navbar />

                <div className="flex flex-col justify-between items-start min-h-screen">
                    <motion.div
                        className="text-white w-full md:min-h-[30vh] flex flex-col justify-end px-5"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div className="text-5xl md:text-[80px]" variants={fadeInUp}>
                            Privacy Policy
                        </motion.div>
                        <motion.div className="text-lg md:text-xl mt-4 opacity-80" variants={fadeInUp}>
                            Effective Date: 16/11/2025
                        </motion.div>
                    </motion.div>

                    {/* PRIVACY POLICY BODY */}
                    <motion.div
                        className="w-full min-h-[95vh] md:mx-4 flex flex-col py-10 px-5 gap-10 text-white"
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Intro Section */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <p>
                                This privacy policy (“Privacy Policy”) describes how Safetrails Infotech Private Limited (CIN- U62099KA2024PTC186477), a company based out of Ground Floor, WeWork, Salarpuria Symbiosis, Bannerghatta Road, Bangalore, Bangalore South, Karnataka, India, 560076, (hereinafter referred to as “we”, “us” “our” or “Company”) collect, use, and disclose information pertaining to its customers, users, visitors (hereinafter referred to as “you”, “your” or “User”) obtained via any method including this website <a href="https://www.contrails.ai/" className="underline">https://www.contrails.ai/</a> or any mobile application or other tools (“Website”).
                            </p>
                            <p>
                                Please read the following to learn about our practice of category and the purposes of data and information to be processed, secure collection, use, disclosure and dissemination of information practices, the contact details of the relevant Grievance Officer, the manner in which an User can exercise its rights which includes the right to withdraw its consent for processing of such data and right to grievance redressal.
                            </p>
                            <p>
                                This Privacy Policy applies globally to all Users who access, use, or interact with Website, APIs, or services, regardless of their country of residence. By visiting this Website or by virtue of any commercial relation (“Services”), you agree to be bound by the terms and conditions of this Privacy Policy. If you disagree, please do not use or access our Website or Services.
                            </p>
                            <p>
                                This Privacy Policy is to be read and interpreted along with our Terms of Use (“Terms”).
                            </p>
                        </motion.div>

                        {/* About the Company */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">About the Company</h3>
                            <p>
                                The Company has advanced Artificial Intelligence (“AI”) and Machine Learning-based software designed to detect manipulated or synthetic digital content such as deepfakes, misinformation, and other integrity risks. Through our Website, Users can upload or transmit data, including but not limited to images, videos, audio, and text, for authenticity assessment, media classification, and analytical reporting.
                            </p>
                        </motion.div>

                        {/* Intended Use and Purpose */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Intended Use and Purpose</h3>
                            <p>
                                Our services are intended for enterprises, investigative agencies, media platforms, governments, and individuals requiring digital content verification, authenticity assessment, and risk detection. The primary purpose of data processing is to analyze uploaded or transmitted digital content, generate authenticity scores, produce reports, and facilitate the mitigation of misinformation and deepfake threats.
                            </p>
                            <p>
                                Our technology applies machine learning algorithms to identify deepfakes, synthetic media, or alterations. We only process User-submitted data to deliver contracted services and under explicit consent. We do not use or repurpose any uploaded data for AI model training or research without prior written consent from the data owner.
                            </p>
                            <p>
                                All data is processed securely and exclusively within the defined purpose of providing content authenticity and verification reports. We may also use limited metadata for maintaining system performance, resolving technical issues, ensuring compliance with applicable law, and providing secure access to our Website. No personal or uploaded data is used for behavioural profiling, marketing, or unrelated analytics purposes.
                            </p>
                            <p>
                                We process data strictly for the intended purpose of providing trust and safety analytics, content authenticity verification, misinformation detection services and other related purposes. Any data uploaded, submitted, or shared by you through the Website remains the property of the respective User or organization. However, by submitting such data, you grant us a limited, non-exclusive license to process and analyze it for delivering our services, in accordance with applicable data protection laws.
                            </p>
                            <p>
                                The Company processes User data strictly as a data processor, acting on behalf of Users who determine the purpose and means of such processing. Data collected or analyzed through the Website is retained only for the period necessary to fulfil the stated purpose, unless a longer retention period is required by law, regulatory obligation or for such periods that may be required to resolve any trouble shooting errors. You shall ensure that all data provided to the Company is lawfully obtained and free from third-party claims.
                            </p>
                        </motion.div>

                        {/* Consent */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Consent</h3>
                            <p>
                                By using the Website or Services and/or by providing your information, you consent to the collection and use of the information you disclose on the Website in accordance with this Privacy Policy, including but not limited to your consent for sharing or using your information as per this Privacy Policy. Our processing activities rely on lawful bases such as contractual necessity, consent, and compliance with legal obligations.
                            </p>
                            <p>
                                Users must provide explicit consent before uploading any data that may contain personal or biometric information. Consent is captured electronically through our interfaces, and Users retain the right to withdraw it at any time. Consent provided by Users shall be freely given, specific, informed, and unambiguous, and may be withdrawn at any time in accordance with applicable laws.
                            </p>
                            <p>
                                Where Users provide Data that includes personal or biometric information, consent will be recorded electronically and retained for audit purposes. If you disclose any personal information relating to other people to us, you represent that you have the authority to do so and to permit us to use the information in accordance with this Privacy Policy.
                            </p>
                        </motion.div>

                        {/* Categories of Data Collected */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Categories of Data Collected</h3>
                            <p>We collect, process, and retain the following categories of information as necessary to deliver our Services (collectively referred as “Personal Data” or “Data”):</p>
                            <ul className="list-disc list-outside ml-6 space-y-3">
                                <li className="pl-1">
                                    <span className="font-semibold underline">Personal Information:</span> Includes name, contact number, email address, designation, company affiliation, billing information, and other communication details.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold underline">Technical and Device Information:</span> Includes IP address, device type, browser details, operating system, session identifiers, and timestamps.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold underline">Uploaded and Processed Content:</span> Includes digital files such as images, videos, audio, and metadata (geolocation, timestamps) submitted via Application Programming Interface (“API”) or web upload for content authenticity checks.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold underline">Sensitive Personal and Biometric Data:</span> Includes facial geometry, visual markers, or voice data contained within uploaded media. This data is processed only for analysis and deleted after processing.
                                </li>
                            </ul>
                            <p>
                                We do not intentionally collect any data from children below the age of eighteen (18). If such Data is inadvertently collected, it will be deleted immediately upon discovery.
                            </p>
                        </motion.div>

                        {/* Security and Data Protection */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Security and Data Protection</h3>
                            <p>
                                The Company maintains strict administrative, physical, and technical safeguards to ensure the confidentiality, integrity, and availability of all data processed through the Website.
                            </p>
                            <p className="mb-2">Security measures include:</p>
                            <ul className="list-disc list-outside ml-6 space-y-3">
                                <li className="pl-1">encryption of data in transit and at rest;</li>
                                <li className="pl-1">controlled access with very strict and limited access for employees and contractors;</li>
                                <li className="pl-1">regular monitoring, and vulnerability assessments; and</li>
                                <li className="pl-1">secure data storage and deletion in compliance with applicable laws.</li>
                            </ul>
                            <p>
                                We do not sell, process or rent personal or organizational data. In the unlikely event of a Personal Data breach, we will notify the relevant supervisory authority and affected Users, where required by law, within the timelines prescribed under applicable data protection laws.
                            </p>
                            <p>
                                The Company continuously evaluates threat and vulnerability data to understand cyber-security risk further. The Company may adjust its approach to defend your Data further based on available information. We take precautions, including industry-standard administrative, technical, and physical measures that are designed to safeguard the Data collected from you against loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. These technologies are designed to protect the confidentiality of your Personal Data when transmitted over the internet.
                            </p>
                            <p>
                                The Company implements security controls consistent with globally recognized standards. Users are responsible for maintaining security of their access credentials and systems used to connect with the Website.
                            </p>
                        </motion.div>

                        {/* Third Party Involvement */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Third Party Involvement</h3>
                            <p>
                                The Company engages only with secure cloud infrastructure as sub processors for hosting, storage, and system operations. We do not share User Data with marketing partners, analytics vendors, or other third parties.
                            </p>
                        </motion.div>

                        {/* Collection of Personal Data by the Company */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Collection of Personal Data by the Company</h3>
                            <p>
                                The Company collects Personal Data in digital or other forms to perform its business activities and render their services. We collect only the minimum data necessary for the stated purposes and ensure that no excessive, irrelevant, or unnecessary personal data is collected.
                            </p>
                            <p>The following table explains the types of data we collect and the legal basis on which this data is processed:</p>
                            
                            <div className="overflow-x-auto mt-4">
                                <table className="w-full border-collapse border border-white/30 text-sm text-left">
                                    <thead>
                                        <tr className="bg-white/10">
                                            <th className="border border-white/30 p-3 font-semibold">Purpose</th>
                                            <th className="border border-white/30 p-3 font-semibold">Data (key element)</th>
                                            <th className="border border-white/30 p-3 font-semibold">Basis</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-white/30 p-3">To provide content authenticity, deepfake detection, and misinformation analysis services</td>
                                            <td className="border border-white/30 p-3">Uploaded and processed content, including images, videos, audio files, and associated metadata (timestamps, geolocation, visual markers).</td>
                                            <td className="border border-white/30 p-3">Contractual necessity - Processing is essential to perform the services requested by the User under our Terms.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/30 p-3">To verify digital content integrity through biometric or facial analysis</td>
                                            <td className="border border-white/30 p-3">Biometric data, such as facial geometry, voice samples, or other unique identifiers incidentally contained in uploaded media.</td>
                                            <td className="border border-white/30 p-3">Contractual Necessity – Processing is done only with prior, informed, opt-in consent is asked for the specific purpose of authenticity verification, and it is deleted post-analysis.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/30 p-3">To manage User accounts and payments</td>
                                            <td className="border border-white/30 p-3">Personal information such as name, email, phone number, designation, organization details, and billing or payment information.</td>
                                            <td className="border border-white/30 p-3">Contractual necessity - Required to create and maintain accounts, deliver invoices, and ensure service continuity.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/30 p-3">To maintain Website functionality and enhance User experience</td>
                                            <td className="border border-white/30 p-3">Technical and device information, including IP address, browser details, session identifiers, operating system, and activity logs.</td>
                                            <td className="border border-white/30 p-3">Legitimate interests – Necessary to secure and optimize the Website, prevent fraud, and diagnose service issues.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/30 p-3">To communicate with Users regarding service updates, support requests, or compliance notifications</td>
                                            <td className="border border-white/30 p-3">Contact details such as name, email address, and message content shared through contact forms or support channels.</td>
                                            <td className="border border-white/30 p-3">Legitimate Interest - To respond to User inquiries, resolve issues, and send essential communications.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/30 p-3">To ensure legal compliance and regulatory obligations</td>
                                            <td className="border border-white/30 p-3">Transactional records, logs, consent history, and communications.</td>
                                            <td className="border border-white/30 p-3">Legal obligation – Required to comply with applicable laws, audits, or law enforcement requests.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/30 p-3">To ensure information security, fraud prevention, and troubleshooting</td>
                                            <td className="border border-white/30 p-3">Access logs, system performance data.</td>
                                            <td className="border border-white/30 p-3">Legitimate interests – To maintain secure operations, detect malicious activity, and protect system integrity.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        {/* Usage of Personal Data Collection */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Usage of Personal Data Collection</h3>
                            <p>
                                The Company collects Personal Data from its Users through the Website. Data is collected only to provide the requested services, enhance performance and to comply with legal obligations. We process data strictly in accordance with contractual terms and User consent, ensuring minimal data retention and transparency at all stages of processing. We will only use your Data in a manner consistent with the purpose and legal basis on which it was collected, as detailed in the table above and in accordance with applicable data protection laws. We process Data strictly for legitimate and consented purposes to ensure responsible use of AI for integrity and safety.
                            </p>
                            <p>We may use your Personal Data to:</p>
                            <ul className="list-disc list-outside ml-6 space-y-3">
                                <li className="pl-1">
                                    <span className="font-semibold">Deliver and operate our Services:</span> to perform authenticity verification, deepfake detection, multimodal content analysis, and related analytics as requested by you or your organization through our platform or APIs.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold">Provide secure and reliable functionality:</span> to maintain Website stability, manage user authentication, monitor performance, prevent abuse or misuse, and detect anomalies or suspicious activity that may affect the integrity of our systems.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold">Ensure accuracy and integrity of analysis results:</span> to process submitted images, videos, audio, or text through our proprietary AI models, generating structured authenticity reports while upholding fairness, accuracy, and transparency in AI operations.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold">Provide customer support and technical assistance:</span> to respond to User queries, resolve performance or data-processing issues, and ensure smooth and continuous service delivery for enterprise and API customers.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold">Comply with legal and contractual obligations:</span> to meet statutory, regulatory, or law enforcement requirements, respond to lawful requests, and fulfil obligations under applicable privacy and data protection laws.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold">Protect security, integrity, and lawful operation:</span> to detect and prevent security threats, fraud, unauthorized access, and other potentially unlawful or harmful activity impacting users, the platform, or our partners.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold">Quality and security assurance:</span> to assess performance, data accuracy, and compliance with our internal controls, and other globally recognized service and security frameworks.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold">Communicate essential updates:</span> to notify Users of important changes such as service upgrades, feature modifications, maintenance schedules, or updates to this Privacy Policy that are necessary for continued and lawful use of the platform.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold">Investigate and enforce compliance:</span> to ensure adherence to our Terms, enterprise contracts, and applicable international regulations, and to investigate any potential misuse, infringement, or violation of policy or law.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold">Safeguard the rights and safety of all parties:</span> to protect the rights, property, and safety of the Company, its employees, clients, service partners, and the general public, including preventing misuse of AI systems and content authenticity services.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold">Respond to lawful third-party requests:</span> to disclose limited personal or operational information to governmental authorities, courts, or contractual partners where such disclosure is legally required or explicitly authorized by you.
                                </li>
                            </ul>
                        </motion.div>

                        {/* Retention Period of Personal Data */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Retention Period of Personal Data</h3>
                            <p>
                                The Company retains Personal Data only for as long as necessary to fulfil the specific purpose for which it was collected, to comply with legal and contractual obligations, or to resolve disputes and enforce our rights. We apply strict retention controls designed to minimize data storage duration and ensure that information is securely deleted or anonymised once it is no longer required.
                            </p>
                            <p>
                                Uploaded content such as images, videos, audio, and associated metadata processed through our platform or APIs is retained for a period not exceeding <span className="font-semibold">30 days</span> from the date of submission. This limited retention period enables post-processing verification, troubleshooting of technical issues, and system diagnostics if required.
                            </p>
                            <p>In exceptional cases, specific Data elements may be retained for a longer duration if:</p>
                            <ul className="list-disc list-outside ml-6 space-y-3">
                                <li className="pl-1">retention is necessary to comply with a legal obligation or regulatory requirement;</li>
                                <li className="pl-1">data is required for resolving disputes or defending potential legal claims; or</li>
                                <li className="pl-1">retention has been explicitly agreed upon with the User for continued service provision or contractual compliance.</li>
                            </ul>
                            <p>
                                Once the retention period expires, all Personal Data, including backups, is securely deleted, anonymised, or irreversibly destroyed using industry-standard security measures unless otherwise specified. We periodically review our data retention schedules to ensure ongoing compliance with applicable laws and to uphold the principle of data minimisation.
                            </p>
                            <p>
                                We take the principles of Data minimisation and removal seriously and have internal policies in place to ensure that we only ever ask for the minimum amount of data for the associated purpose and delete that Data promptly once it is no longer required.
                            </p>
                        </motion.div>

                        {/* Sharing of Personal Data */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Sharing of Personal Data</h3>
                            <p>
                                We may share your Personal Data only where necessary to provide our Services, to comply with applicable law, or to protect the security and integrity of our systems. We do not sell or share your Personal Data for marketing, profiling, training of AI models or cross-context behavioural advertising. We follow a strict principle of limited disclosure, ensuring that any sharing of Data is lawful, proportionate, and consistent with the purposes described in this Privacy Policy.
                            </p>
                            
                            <div className="overflow-x-auto mt-4">
                                <table className="w-full border-collapse border border-white/30 text-sm text-left">
                                    <tbody>
                                        <tr>
                                            <td className="border border-white/30 p-3 font-semibold w-1/3">Within Group Companies</td>
                                            <td className="border border-white/30 p-3">The Company may share Personal Data with its affiliates, subsidiaries, or parent entities solely for the purposes set forth in this Privacy Policy, such as Service delivery, security management, internal auditing, or compliance. All intra-group transfers are governed by confidentiality agreements and appropriate safeguards.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/30 p-3 font-semibold">Service Providers</td>
                                            <td className="border border-white/30 p-3">We engage select third-party service providers to support our operations, such as secure cloud hosting, data storage, and system monitoring. These providers process and store Data only on our instructions and under strict contractual terms consistent with applicable data protection laws. They are not authorized to use or disclose Personal Data for any purpose other than the provision of contracted services.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/30 p-3 font-semibold">Professional advisors</td>
                                            <td className="border border-white/30 p-3">We may disclose limited personal information to professional advisors such as legal counsel, auditors, insurers, or financial consultants, but only when necessary for legitimate business purposes such as audit, risk assessment, legal compliance, or enforcement of contractual rights.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/30 p-3 font-semibold">Law Enforcement Agencies; Protection and Safety</td>
                                            <td className="border border-white/30 p-3">We may disclose your personal information to government or law enforcement officials: (a) for the security, compliance, fraud prevention and safety purposes; (b) as required by law, lawful requests or legal process, such as to respond to subpoenas or requests from government authorities; (c) where permitted by law in connection with any legal investigation; and (d) to prosecute or defend legal claims.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/30 p-3 font-semibold">Court/Government Agencies/Regulatory Authorities</td>
                                            <td className="border border-white/30 p-3">We may disclose the information if required to do so by law, a court or a government agency, only in the good faith belief that such action is necessary (a) to comply with a legal obligation, (b) to protect or defend our rights, interests or property, (c) to prevent or investigate possible wrongdoing in connection with the Services, (d) to act in urgent circumstances to protect the personal safety of Users or the public; or (e) to protect against legal liability.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/30 p-3 font-semibold">Website Uses</td>
                                            <td className="border border-white/30 p-3">From time to time, we may post testimonials on the Website that may contain certain Personal Data. We obtain your consent to post your name along with your testimonial. If you wish to update or delete your testimonial, you can contact us at our official email provided in the Privacy Policy.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/30 p-3 font-semibold">Corporate Restructuring</td>
                                            <td className="border border-white/30 p-3">In the event of a merger, acquisition, reorganization, or sale of business assets, Personal Data relevant to the transaction may be transferred to the acquiring entity. Any such entity will be required to use and protect the information in accordance with this Privacy Policy and applicable laws.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        {/* Data Transfer */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Data Transfer</h3>
                            <p>
                                As part of global operations, the Company may transfer and process User Data across jurisdictions or to its cloud partners. All such transfers are conducted in accordance with applicable data protection laws, where applicable. We ensure that adequate safeguards are maintained to protect your Data irrespective of its processing location.
                            </p>
                        </motion.div>

                        {/* Rights you have over your data */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Rights you have over your data</h3>
                            <p>
                                As a User you have specific rights regarding the Personal Data being processed by the Company and other applicable data protection laws. We respect and uphold these rights, ensuring that you maintain control over your Personal Data:
                            </p>
                            <ul className="list-disc list-outside ml-6 space-y-3">
                                <li className="pl-1">
                                    <span className="font-semibold">Right to Access:</span> You have the right to obtain confirmation on whether the Company processes your Personal Data, and to request information about the nature, purpose, and categories of data being processed, as well as the recipients of such data.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold">Right to Correction and Erasure:</span> You may request the correction or updating of inaccurate or incomplete Personal Data. You may also request the deletion of your Personal Data when it is no longer required for the purpose for which it was collected.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold">Right to Withdraw Consent:</span> You have the right to withdraw your consent for processing at any time. Withdrawal of consent will not affect the lawfulness of processing based on consent before its withdrawal, but it may limit your access to certain services that rely on such consent.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold">Right to Restrict or Object to Processing:</span> You may object to the processing of your Personal Data if you believe it impacts your fundamental rights and freedoms, unless we demonstrate compelling legitimate grounds for the processing. You may also request restriction of processing in certain circumstances, such as while verifying Data accuracy or handling an objection.
                                </li>
                                <li className="pl-1">
                                    <span className="font-semibold">Right to Lodge a Complaint:</span> You have the right to raise a grievance or lodge a complaint with Grievance Officer regarding the handling of your Personal Data.
                                </li>
                            </ul>
                        </motion.div>

                        {/* AI Ethics and Responsible Use */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">AI Ethics and Responsible Use</h3>
                            <p>
                                The Company adheres to ethical AI principles in developing and deploying its tools. Users must not use the Website or its services for unlawful, discriminatory, deceptive, or malicious purposes. You agree that our AI models are designed to assist in analysis and detection and should not be solely relied upon for critical decisions without appropriate human review.
                            </p>
                            <p>
                                The Company is committed to ethical AI practices, including transparency, fairness, non-discrimination, and auditability of AI model behavior. Users agree not to deploy or rely upon AI outputs in contexts where human review or regulatory validation is legally mandated. The Company disclaims any liability for outcomes derived from automated decision-making where human judgment is required by law or by prudent industry standards.
                            </p>
                            <p>
                                Users accessing the Website through APIs agree to comply with applicable usage limits, authentication requirements, and rate controls. API credentials are personal and non-transferable, and Users shall not share, resell, or embed API outputs into third-party systems without authorization.
                            </p>
                        </motion.div>

                        {/* Use of Cookies */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Use of Cookies</h3>
                            <p>
                                A cookie is a small piece of information stored by a Web server on a Web browser so that it can be later read from that browser. Cookies are useful for enabling the browser to remember information specific to a given User. This is done to recognise your device during future visits to our Website, primarily to provide a better user experience.
                            </p>
                            <p>
                                We use essential cookies to enable website functionality and security. Non-essential cookies (e.g., for analytics) are used only with explicit User consent. Users can control cookie preferences through browser settings or consent banners.
                            </p>
                        </motion.div>

                        {/* Modifications */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Modifications</h3>
                            <p>
                                The Company reserves the rights, at its sole discretion, to change, modify, add, remove or impose restrictions on features or services or any portion to the Privacy Policy in whole or in part, at any time. However, our commitment to protecting Users privacy will remain our main emphasis.
                            </p>
                            <p>
                                Changes in this Privacy Policy will be effective when they are updated on the Website. You are requested to keep checking the Privacy Policy from time to time for any changes made. Your continued use of the Website after any changes are posted will be considered acceptance of those changes. However, material changes to this Privacy Policy will be communicated to Users via a prominent notice on our Website prior to their effective date.
                            </p>
                        </motion.div>

                        {/* Consequences of Not Providing Personal Data */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Consequences of Not Providing Personal Data</h3>
                            <p>
                                If you choose not to provide your Personal Data, which is mandatory to process your request or provide Services, we may not be able to provide the corresponding experience.
                            </p>
                        </motion.div>

                        {/* Contact Us */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Contact Us</h3>
                            <p>
                                Please contact us for any questions, concerns or requests relating to the Privacy Policy or any of our data protection practices.
                            </p>
                            <p className="mb-0">Below are the contact details:</p>
                            <div className="ml-4 border-l-2 border-white/30 pl-4 py-2">
                                <p><strong>Safetrails Infotech Private Limited</strong></p>
                                <p>Registered Address – Ground Floor, WeWork, Salarpuria Symbiosis, Banerghatta Road, Bangalore, Bangalore, South, Karnataka, India, 560076</p>
                                <p>Email – <a href="mailto:contact@contrails.ai" className="underline">contact@contrails.ai</a></p>
                                <p>Website - <a href="https://www.contrails.ai/" className="underline">https://www.contrails.ai/</a></p>
                            </div>
                        </motion.div>

                        {/* Grievance Redressal Mechanism */}
                        <motion.div className="flex flex-col gap-5" variants={fadeInUp}>
                            <h3 className="font-semibold text-xl mb-2">Grievance Redressal Mechanism</h3>
                            <p>
                                We are committed to upholding the rights of Users and to ensure transparency, accountability, and trust, we have established a Grievance Redressal Mechanism to address any concerns or grievances raised by the Users regarding their Personal Data in Annexure-1 of this Privacy Policy.
                            </p>
                            <p>
                                The Company maintains a formal grievance redressal system to handle User concerns promptly and fairly. Complaints regarding Data handling, access requests, or withdrawal of consent can be submitted to our designated Grievance Officer.
                            </p>
                            <p>
                                The Grievance Officer shall acknowledge complaints within three (3) to seven (7) business days and resolve the query within thirty (30) business days. However, the timeline may be extended depending upon the gravity and sensitive nature of the query.
                            </p>
                            <div className="ml-4 border-l-2 border-white/30 pl-4 py-2">
                                <p><strong>Details of Grievance Redressal Officer:</strong></p>
                                <p>Name – Mr. Digvijay Singh</p>
                                <p>Email – <a href="mailto:contact@contrails.ai" className="underline">contact@contrails.ai</a></p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PrivacyPolicy;