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

const TermsOfUse = () => {
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
                            Terms of Use
                        </motion.div>
                        <motion.div className="text-lg md:text-xl mt-4 opacity-80" variants={fadeInUp}>
                            Effective Date: 16/11/2025
                        </motion.div>
                    </motion.div>

                    {/* TERMS BODY */}
                    <motion.div
                        className="w-full min-h-[95vh] md:mx-4 flex flex-col py-10 px-5 gap-10 text-white"
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Intro Section */}
                        <motion.div className="flex flex-col gap-5 " variants={fadeInUp}>
                            <p>
                                This website <a href="https://www.contrails.ai/" className="underline text-blue-300 hover:text-blue-200">https://www.contrails.ai/</a>, including but not limited to any mobile app, browser extension or plugins, tools accessed through mobile or web (“Website”) is owned and operated by Safetrails Infotech Private Limited. (hereinafter referred to as “we”, “us”, “our” or “Company”). If you continue to browse and use this Website, you are agreeing to comply with and be bound by the following terms and conditions of use (collectively, “Terms”), together with our Privacy Policy. “Client”, “you”, and “your” refers to all visitors, registered users, enterprises, clients, and representatives accessing or using the Website, services, or any related Application Programming Interface (“API”) or tools provided by the Company. By using the Website on behalf of an organization, you confirm that you have the authority to bind that organization to these Terms.
                            </p>
                            <p>
                                If you disagree with any part of these Terms, please discontinue using our Website immediately. We reserve the right to modify, alter or update these Terms at any time, and you agree to be bound by such modifications, alterations and updates.
                            </p>
                            <p>
                                These Terms constitute a binding legal agreement between the Company and each Client who accesses or uses the Website. By accessing, registering with, or otherwise using any portion of the Website or its services, you expressly acknowledge that you have read, understood, and agree to be legally bound by these Terms, our Privacy Policy, and all applicable data protection and cybersecurity regulations.
                            </p>
                        </motion.div>

                        {/* About the Company */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">About the Company</h3>
                            <p>
                                The Company is an Artificial Intelligence (“AI”) native Trust & Safety company dedicated to making the internet safer. We build deepfake detection tools, misinformation defense systems, and smart content moderation solutions that empower individuals, enterprises, and governments to safeguard digital spaces at scale. Our mission is to create a digital world where truth, safety, and trust are foundational, enabling Clients and organizations to thrive without the risks posed by AI-generated manipulation, fraud, or malicious content. The analytics, detection, and verification services offered by us are intended for informational and analytical purposes only and do not constitute legal, forensic, or law enforcement advice.
                            </p>
                        </motion.div>

                        {/* Website Content */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Website Content</h3>
                            <p>
                                All materials, including but not limited to software, code, algorithms, photographs, illustrations, images, artwork, designs, text, graphics, logos, button icons, images, audio and video clips, blogs and other intellectual property (collectively, “Content”) available on or through this Website are owned or controlled by us and are protected by applicable intellectual property laws. Unauthorized reproduction, distribution, or modification of any Content is strictly prohibited.
                            </p>
                            <p>
                                In these Terms, Data refers to different categories of information collected, processed, and retained by us, as necessary to deliver our Services. The different categories are:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 mt-2">
                                <li>
                                    <strong>Personal Information:</strong> Includes name, contact number, email address, designation, company affiliation, billing information, and other communication details.
                                </li>
                                <li>
                                    <strong>Technical and Device Information:</strong> Includes IP address, device type, browser details, operating system, session identifiers, and timestamps.
                                </li>
                                <li>
                                    <strong>Uploaded and Processed Content:</strong> Includes digital files such as images, videos, audio, and metadata (geolocation, timestamps) submitted via API or web upload for content authenticity checks.
                                </li>
                                <li>
                                    <strong>Sensitive Personal and Biometric Data:</strong> Includes facial geometry, visual markers, or voice data contained within uploaded media. This data is processed only for analysis and deleted after processing.
                                </li>
                            </ul>
                        </motion.div>

                        {/* Use of Content */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Use of Content</h3>
                            <p>
                                Access to the Website is provided solely for the purpose of utilizing the Company’s AI-driven trust and safety analytics and related functionalities. We do not access your Data for training, research of our AI model or any other purposes than obtained for its intended use. The Client is not granted any ownership interest or intellectual property right in the underlying software, algorithms, or Data. The Company reserves the right to suspend or terminate access at any time for misuse, non-compliance with applicable law, or violation of these Terms.
                            </p>
                            <p>
                                Subject to these Terms and any other policy as may be referred here, you have been granted a non-exclusive, non-transferable, limited right to access and use this Website. You agree not to interrupt or attempt to interrupt the operation of the Website in any manner. You shall not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products or services obtained from this Website.
                            </p>
                        </motion.div>

                        {/* Accuracy of Content */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Accuracy of Content</h3>
                            <p>
                                While we strive for high accuracy in AI model outputs, no AI system is infallible. Results generated through our tools are probabilistic and may contain errors. We do not guarantee absolute accuracy, completeness, or reliability of AI-generated insights or content verification results. Clients must exercise judgment and, where necessary, seek additional validation before taking consequential actions based on the Data or analytics provided.
                            </p>
                            <p>
                                Reports, results, or detection insights generated by the Company shall not be represented as official certifications or evidentiary conclusions in any regulatory, legal, or judicial proceeding without the Company’s prior written consent.
                            </p>
                            <p>
                                Notwithstanding the above, we make our best endeavors to ensure the results and reports generated are of the highest quality. However, this Website may contain mistakes or typographical errors. The company makes no representations about the accuracy, reliability, completeness, or timeliness of the Website or the Content. The utilization of the Website and Content is at your own risk. Changes are periodically made to the Website and may be made at any time.
                            </p>
                        </motion.div>

                        {/* Data Collection */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Data Collection</h3>
                            <p>
                                The use of this Website and related services may involve the collection and processing of certain categories of information, strictly for the purpose of providing the services of AI-powered trust and safety analytics services. The nature, scope, and purposes of such Data processing where applicable are detailed in the Company’s Privacy Policy, which forms an integral part of these Terms. By using the Website, you acknowledge that you have read and understood the Privacy Policy and consent to Data processing as outlined therein, to the extent permitted by applicable law.
                            </p>
                        </motion.div>

                        {/* Data Processing */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Data Processing</h3>
                            <p>
                                We process Data strictly for the intended purpose of providing trust and safety analytics, content authenticity verification, misinformation detection services and other related purposes. Any Data uploaded, submitted, or shared by you through the Website remains the property of the respective Client or organization. However, by submitting such Data, you grant us a limited, non-exclusive license to process and analyze it for delivering our services, in accordance with applicable Data protection laws.
                            </p>
                            <p>
                                The Company processes Client Data strictly as a Data processor, acting on behalf of Clients who determine the purpose and means of such processing. Data collected or analyzed through the Website is retained only for the period necessary to fulfil the stated purpose, unless a longer retention period is required by law, regulatory obligation or for such periods that may be required to resolve any trouble shooting errors. You shall ensure that all Data provided to the Company is lawfully obtained and free from third-party claims.
                            </p>
                        </motion.div>

                        {/* AI Ethics and Responsible Use */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">AI Ethics and Responsible Use</h3>
                            <p>
                                The Company is committed to developing, deploying, and maintaining AI systems in a responsible, transparent, and lawful manner. We recognize that the use of AI technologies must respect human rights, protect individual privacy, and ensure fairness and accountability in all stages of design and operation. Our AI-based content authenticity and deepfake detection technologies are developed and deployed in accordance with the following guiding principles:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 mt-2">
                                <li>
                                    <strong>Transparency:</strong> We strive to ensure that our AI systems operate transparently and that their outputs are explainable to Clients and stakeholders. Whenever practicable, we provide information on the nature, objectives, and limitations of AI-assisted analysis to help users understand the basis of results generated through our Website.
                                </li>
                                <li>
                                    <strong>Fairness and Non-Discrimination:</strong> We take measures to prevent and minimize bias in our AI models and datasets. We periodically test and evaluate our algorithms to detect and mitigate unfair or discriminatory outcomes and maintain an inclusive and equitable approach to model design.
                                </li>
                                <li>
                                    <strong>Privacy and Data Protection:</strong> AI development and deployment processes at our Company adheres to privacy-by-design and data minimisation principles. Data used in AI processing is limited to what is strictly necessary, anonymised where possible, and handled in compliance with applicable privacy and data protection laws.
                                </li>
                                <li>
                                    <strong>Security and Reliability:</strong> We implement rigorous technical and organizational safeguards to ensure the robustness, security, and reliability of our AI systems.
                                </li>
                                <li>
                                    <strong>Prohibition of Harmful Use:</strong> We expressly prohibit the use of its AI systems or outputs for any activity that may cause harm, manipulate public discourse, promote misinformation, or infringe upon the rights and freedoms of individuals. Any violation of this principle may result in suspension or termination of access to our services.
                                </li>
                            </ul>
                            <p>
                                By adhering to these principles, we aim to foster the responsible and ethical use of AI in promoting content authenticity, combating misinformation, and protecting the integrity of digital media ecosystems.
                            </p>
                        </motion.div>

                        {/* Security and Data Protection */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Security and Data Protection</h3>
                            <p>
                                The Company maintains strict administrative, physical, and technical safeguards to ensure the confidentiality, integrity, and availability of all Data processed through the Website. Security measures include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Encryption of Data in transit and at rest;</li>
                                <li>Controlled access with very strict and limited access for employees and contractors;</li>
                                <li>Regular monitoring, and vulnerability assessments; and</li>
                                <li>Secure Data storage and deletion in compliance with applicable laws.</li>
                            </ul>
                            <p>
                                We do not sell, process or rent personal or organizational Data. In the unlikely event of a Data breach, affected Clients will be notified in accordance with applicable legal requirements.
                            </p>
                            <p>
                                The Company continuously evaluates threat and vulnerability data to understand cyber-security risk further. The Company may adjust its approach to defend your Data further based on available information. We take precautions, including industry-standard administrative, technical, and physical measures that are designed to safeguard the Data collected from you against loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. These technologies are designed to protect the confidentiality of your Data when transmitted over the internet. The Company implements security controls consistent with globally recognized standards. Users are responsible for maintaining security of their access credentials and systems used to connect with the Website.
                            </p>
                        </motion.div>

                        {/* Compliance with CERT-IN Direction */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Compliance with CERT-IN Direction No. 20(3)/2022</h3>
                            <p>
                                The Company undertakes all necessary measures to ensure compliance with the Direction No. 20(3)/2022 issued by the Indian Computer Emergency Response Team (CERT-In) under Section 70B(6) of the Information Technology Act, 2000 under Indian laws, and any amendments thereto.
                            </p>
                            <p>
                                In accordance with the said Directions and applicable cybersecurity regulations, the Company maintains:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 mt-2">
                                <li>
                                    <strong>Log Retention:</strong> Maintain logs of all Information and Communications Technology (ICT) systems for a minimum period of one hundred and eighty (180) days within Indian jurisdiction.
                                </li>
                                <li>
                                    <strong>Incident Reporting:</strong> Report all identified cybersecurity incidents to CERT-In within six (6) hours of such incident coming to the Company’s notice.
                                </li>
                                <li>
                                    <strong>Customer Record Retention:</strong> Retain and securely store relevant Client, and transaction records for a period of five (5) years following the end of the Client relationship.
                                </li>
                                <li>
                                    <strong>Information Submission:</strong> Provide relevant logs, Data, and information to CERT-In or other authorized agencies upon lawful request for the purpose of cybersecurity incident analysis, response, or investigation.
                                </li>
                                <li>
                                    <strong>Cooperation and Remediation:</strong> Cooperate fully with governmental authorities in cybersecurity response activities, and promptly implement remedial measures as required to prevent recurrence of reported incidents.
                                </li>
                            </ul>
                            <p>
                                The Company remains committed to maintaining robust cybersecurity practices and ensuring the protection, integrity, and lawful management of your Data in accordance with the CERT-In Directions issued on April 28, 2022, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and other applicable Indian laws.
                            </p>
                            <p>
                                These measures reinforce the Company’s commitment to upholding trust, transparency, and accountability in all aspects of cybersecurity and AI operations.
                            </p>
                        </motion.div>

                        {/* Data Transfer */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Data Transfer</h3>
                            <p>
                                As part of global operations, the Company may transfer and process Client Data across jurisdictions or to its cloud partners. All such transfers are conducted in accordance with applicable Data protection laws, where applicable. We ensure that adequate safeguards are maintained to protect your Data irrespective of its processing location.
                            </p>
                        </motion.div>

                        {/* Limitation of Liability */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Limitation of Liability</h3>
                            <p>
                                We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the Website or services, including but not limited to errors in AI analysis, Data loss, unauthorized access, third-party actions, or that are related to the use of, or the inability to use, the Content, materials, and functions of this Website. Your use of the Website is at your own risk.
                            </p>
                        </motion.div>

                        {/* Acceptable Use and Prohibited Activities */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Acceptable Use and Prohibited Activities</h3>
                            <p>
                                To maintain the security, reliability, and integrity of our Website, all Clients must adhere to the following acceptable use conditions. You agree that you shall not, directly or indirectly:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>use the Website or its outputs for any unlawful, fraudulent, defamatory, harassing, abusive, or harmful activity;</li>
                                <li>upload, submit, or analyze content that promotes hate speech, terrorism, discrimination, exploitation, or misinformation;</li>
                                <li>attempt to gain unauthorized access to any portion of the Website, systems, or networks connected to it;</li>
                                <li>use our AI systems to train, benchmark, or develop competing models or technologies without prior written consent; and</li>
                                <li>not engage in any activity that could compromise the ethical use of AI, damage the reputation of the Company, or interfere with the proper operation of its detection systems.</li>
                            </ul>
                            <p>
                                Violation of this clause may result in immediate suspension or termination of access and may attract legal action under applicable laws.
                            </p>
                        </motion.div>

                        {/* Blogs and other Social Media Channels */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Blogs and other Social Media Channels</h3>
                            <p>
                                The Company may publish articles, insights, research papers, or blog posts on the Website or through official social media channels. These publications may contain the personal opinions of individual authors and do not necessarily represent the official stance or position of the Company. All articles, research publications, or media authored by employees or associates and published on the Website shall remain the intellectual property of the Company, even if attributed individually.
                            </p>
                            <p>
                                Clients may be permitted to share comments, feedback, or reactions on certain sections of the Website or through Company-linked platforms. By engaging in such interactions, you agree that:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>you will maintain a respectful, professional, and lawful tone in all communications;</li>
                                <li>you will not post or share any content that is defamatory, infringing, obscene, discriminatory, misleading, or unlawful;</li>
                                <li>you will not upload or distribute malicious code, spam, or any material that could harm the integrity or performance of the Website or its other Clients;</li>
                                <li>you will not impersonate others or misrepresent your affiliation with any organization; and</li>
                                <li>you shall not publish or share confidential, proprietary, or third-party information without proper authorization.</li>
                            </ul>
                            <p>
                                The Company reserves the right to monitor, moderate, or remove any content or comment that violates these Terms or may harm the Company’s reputation, legal rights, or Client’s safety. You further agree to indemnify and hold harmless the Company from any claim arising from your communications or contributions on the Website.
                            </p>
                        </motion.div>

                        {/* Service Availability and Maintenance */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Service Availability and Maintenance</h3>
                            <p>
                                We strive to ensure continuous and reliable access to the Website. However, the Company does not guarantee uninterrupted availability. Access to certain features or services may be temporarily suspended or limited for maintenance, system updates, or unforeseen technical issues. The Company shall not be liable for any losses, delays, or damages resulting from the unavailability of services, downtime, or technical errors, whether planned or unplanned. Service interruptions or maintenance-related downtime shall not constitute a breach of these Terms or any service-level commitment unless expressly stated or mutually agreed between the parties. The Company will also make all reasonable efforts possible to communicate the same to its Clients regarding such delays or unavailability, and it shall make reasonable efforts to mitigate the impact and resume normal operations as soon as practicable.
                            </p>
                        </motion.div>

                        {/* Ownership of Intellectual Property Rights */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Ownership of Intellectual Property Rights</h3>
                            <p>
                                All Content, including trademarks, copyrights, names, etc., shall be owned of the Company. No use of these made for any purpose whatsoever without the prior written authorisation/consent of the Company is allowed.
                            </p>
                        </motion.div>

                        {/* Payments */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Payments</h3>
                            <p>
                                Certain of our services offered through our Website require payments to be made by you. Payment terms, pricing, and billing will be specified and you shall agree upon them at the time of purchase. Failure to make the payments may result in non-completion of the service. All fees are exclusive of applicable taxes, duties, or levies, which shall be borne by the Client unless specified otherwise. All payments are non-refundable unless otherwise agreed in writing.
                            </p>
                        </motion.div>

                        {/* Indemnification */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Indemnification</h3>
                            <p>
                                You shall be liable to indemnify, defend and keep the Company harmless and its directors, trustees, employees, associates, affiliates etc. (“Indemnified Parties”) from and against any and all liability and costs, including, without limitation, reasonable attorneys' fees, incurred by the indemnified parties in connection with any claim arising out of any breach by you of these Terms and intellectual property rights.
                            </p>
                        </motion.div>

                        {/* Confidentiality */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Confidentiality</h3>
                            <p>
                                Both parties shall maintain the confidentiality of all non-public information shared or accessed through the Website. Clients must not disclose, reproduce, or distribute any proprietary or confidential information obtained from the Website without our prior written consent. However, the reports/results generated from the services performed by the Company and shared with the Client are your own property and may be used by you as deemed appropriate. Confidentiality obligations shall not apply to information that:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>is or becomes public without breach;</li>
                                <li>was lawfully obtained from a third party; or</li>
                                <li>is required to be disclosed under applicable law or by order of a court or authority.</li>
                            </ul>
                        </motion.div>

                        {/* Cookies and Tracking Technology */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Cookies and Tracking Technology</h3>
                            <p>
                                Our Website may use cookies, web beacons, and similar technologies to enhance your experience, analyze usage patterns, to improve our services. By continuing to use the Website, you consent to the use of such technologies in accordance with our Cookie Policy.
                            </p>
                        </motion.div>

                        {/* Feedback and Suggestions */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Feedback and Suggestions</h3>
                            <p>
                                We value feedback and may invite Clients from time to time to provide suggestions or ideas regarding improvements to the Website. By submitting feedback, you acknowledge that such submissions are voluntary and do not create any confidentiality or compensation obligation on the Company. All rights, title, and interest in feedback or suggestions provided by you shall be deemed assigned to the Company, and the Company shall be free to use, adapt, or commercialize them without restriction.
                            </p>
                        </motion.div>

                        {/* Representation and Warranties */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Representation and Warranties</h3>
                            <p>
                                Each Client represents that they have the legal authority to use the Website and that your use complies with all applicable laws and regulations and, and that any Data, content, or material you provide is lawful. The Company represents and warrants that it provides access to its AI-powered trust and safety solutions, detection tools, and analytics services on an “as is” and “as available” basis, exercising reasonable skill, diligence, and security consistent with industry standards.
                            </p>
                        </motion.div>

                        {/* Modification */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Modification</h3>
                            <p>
                                The Company reserves the rights, at its sole discretion, to change, modify, add, remove or impose restrictions on features or services or any portion to these Terms in whole or in part, at any time. Changes in these Terms will be effective when they are updated on the Website. You are requested to keep checking the Terms for any changes made. Your continued use of the Website after any changes to these Terms are posted will be considered acceptance of those changes.
                            </p>
                        </motion.div>

                        {/* Violations */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Violations</h3>
                            <p>
                                Violations of this policy may result in a range of actions, including blacklisting, cancellation of providing any services or legal action against a breach.
                            </p>
                        </motion.div>

                        {/* Force Majeure */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Force Majeure</h3>
                            <p>
                                The Company shall not be held liable for any failure or delay in performance of its obligations under these Terms that results from circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, war, civil unrest, government actions, pandemics, labour disputes, cyberattacks, internet or cloud infrastructure failures, or changes in applicable laws or regulations.
                            </p>
                            <p>
                                In the event of such circumstances, the Company’s obligations shall be suspended for the duration of the event, and it shall make reasonable efforts to mitigate the impact and resume normal operations as soon as practicable. The Company will also make all reasonable efforts possible to communicate the same to its Clients regarding such delays. Any temporary unavailability or delay caused by such events shall not constitute a breach of these Terms or entitle the Client to any compensation.
                            </p>
                        </motion.div>

                        {/* Contact Us */}
                        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Contact Us</h3>
                            <p>
                                Please contact us for any questions or comments (including all inquiries unrelated to copyright infringement) regarding this Website. Below are the contact details:
                            </p>
                            <div className="pl-4 border-l-2 border-blue-500/50 space-y-2">
                                <p><span className="font-semibold">Safetrails Infotech Private Limited</span></p>
                                <p>Registered Address – Ground Floor, WeWork, Salarpuria Symbiosis, Banerghatta Road, Bangalore, Bangalore, South, Karnataka, India, 560076</p>
                                <p>Email – <a href="mailto:contact@contrails.ai" className="underline text-blue-300 hover:text-blue-200">contact@contrails.ai</a></p>
                                <p>Website - <a href="https://www.contrails.ai/" className="underline text-blue-300 hover:text-blue-200">https://www.contrails.ai/</a></p>
                            </div>
                        </motion.div>

                        {/* Grievance Redressal Officer */}
                        <motion.div className="flex flex-col gap-4 pb-10" variants={fadeInUp}>
                            <h3 className="font-bold  text-white">Grievance Redressal Officer</h3>
                            <p>Following are the contact details for any Grievance Redressal Officer:</p>
                            <div className="pl-4 border-l-2 border-blue-500/50 space-y-2">
                                <p>Name – <span className="font-semibold">Mr. Digvijay Singh</span></p>
                                <p>Email – <a href="mailto:contact@contrails.ai" className="underline text-blue-300 hover:text-blue-200">contact@contrails.ai</a></p>
                                <p>Response Time – The Grievance Officer shall acknowledge complaints within three (3) to seven (7) business days and resolve the query within thirty (30) business days. However, the timeline may be extended depending upon the gravity and sensitive nature of the query.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TermsOfUse;