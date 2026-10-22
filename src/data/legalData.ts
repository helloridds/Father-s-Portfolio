import { InstrumentItem, Testimonial } from '../types';

export const ADVOCATE_INFO = {
  name: 'Advocate Deepak Goyal',
  title: 'Legal Counsel & Conveyancer',
  court: 'District & Sessions Court, Jaipur',
  courtShort: 'Jaipur Sessions Court',
  chamberAddress: 'Chamber / Office near Collectorate Circle, Sessions Court Complex, Bani Park, Jaipur, Rajasthan 302016',
  phone: '9828089628',
  phoneFormatted: '+91 98280 89628',
  email: '79.deepakgoyal@gmail.com',
  experience: '20+ Years Practice',
  hours: 'Mon – Sat: 10:00 AM – 07:30 PM'
};

export const INSTRUMENTS: InstrumentItem[] = [
  // 1. Marriage Certificate
  {
    id: 'marriage-certificate',
    category: 'certificate',
    categoryLabel: 'Certificates & Government Registrations',
    badge: 'POPULAR SERVICE',
    badgeType: 'primary',
    turnaround: '1–2 Working Days',
    title: 'Marriage Certificate (विवाह प्रमाण पत्र)',
    description: 'Complete legal assistance for marriage registration under the Rajasthan Marriage Act and Special Marriage Act. Verification of documents, affidavit preparation, and municipal/tehsil filing.',
    keywords: 'marriage certificate court marriage vivah praman patra registration jaipur',
    clientRequirements: [
      'Age and ID proof of both Husband & Wife (Aadhaar / Voter ID / 10th marksheet)',
      'Wedding card or wedding ceremony photo',
      'Two witnesses with original Aadhaar cards',
      'Joint photo of husband and wife'
    ],
    advocateSafeguards: [
      'Proper verification of age and identity documents',
      'Affidavit drafting on required stamp paper',
      'Assistance at Marriage Registrar Office, Jaipur'
    ]
  },

  // 2. Death Certificate
  {
    id: 'death-certificate',
    category: 'certificate',
    categoryLabel: 'Certificates & Government Registrations',
    badge: 'LEGAL RECORD',
    badgeType: 'neutral',
    turnaround: '2–3 Working Days',
    title: 'Death Certificate & Legal Heir Certificate (मृत्यु प्रमाण पत्र)',
    description: 'Assistance in obtaining official Death Certificate, delayed registration affidavits, and Succession / Legal Heir (वारिसान) certificates for property transfer and bank claims.',
    keywords: 'death certificate mrityu praman patra legal heir warisan certificate bank claim jaipur',
    clientRequirements: [
      'Hospital slip or cremation ground / shamshan receipt',
      'Aadhaar card / ID proof of the deceased person',
      'Aadhaar card of family applicant / Class I legal heirs',
      'Address proof in Jaipur / Rajasthan'
    ],
    advocateSafeguards: [
      'Affidavit drafting for delay condonation (if beyond 21 days)',
      'Sub-Divisional Magistrate (SDM) / Municipal Corporation paperwork',
      'Assistance with Bank claim papers and locker clearances'
    ]
  },

  // 3. Birth Certificate
  {
    id: 'birth-certificate',
    category: 'certificate',
    categoryLabel: 'Certificates & Government Registrations',
    badge: 'ESSENTIAL RECORD',
    badgeType: 'neutral',
    turnaround: '2–4 Working Days',
    title: 'Birth Certificate (जन्म प्रमाण पत्र)',
    description: 'Assistance with new birth registration, delayed birth registration orders through SDM court, and name correction or addition in existing birth certificates.',
    keywords: 'birth certificate janam praman patra child birth delayed registration sdm order jaipur',
    clientRequirements: [
      'Hospital discharge summary / birth slip',
      'Parents\' Aadhaar cards and Marriage certificate',
      'Address proof of parents in Jaipur',
      'School transfer certificate (in case of delayed registration)'
    ],
    advocateSafeguards: [
      'Preparation of legal affidavits on non-judicial stamp',
      'SDM court application for late entry permission',
      'Filing with Jaipur Nagar Nigam / Gram Panchayat'
    ]
  },

  // 4. Property Papers & Sale Deed Registry
  {
    id: 'sale-deed-property',
    category: 'property',
    categoryLabel: 'Property Papers & Registry',
    badge: 'CHAMBER SPECIALIZATION',
    badgeType: 'primary',
    turnaround: '1–2 Days Drafting + Registry Day',
    title: 'Property Papers & Registry (मकान / जमीन की रजिस्ट्री / Sale Deed)',
    description: 'Complete drafting of Sale Deed (बैनामा), property verification, token booking, stamp duty calculation, and personal assistance at Jaipur Sub-Registrar office.',
    keywords: 'property paper registry makan registry zameen registry sale deed conveyance sub-registrar jaipur',
    clientRequirements: [
      'Original Patta / Previous registered deed (चेन ऑफ टाइटल)',
      'Approved plan / JDA / Housing Board allotment letter',
      'Aadhaar card and PAN card of Buyer & Seller',
      'Two witnesses with original Aadhaar cards'
    ],
    advocateSafeguards: [
      'Verification to ensure property is dispute-free and clear of bank loans',
      'Proper measurement and boundary description to prevent future disputes',
      'Accurate stamp duty calculation as per Jaipur DLC rates',
      'Personal presence at Sub-Registrar office during registry'
    ]
  },

  // 5. Agreement to Sell / Bayana Agreement
  {
    id: 'bayana-agreement',
    category: 'property',
    categoryLabel: 'Property Papers & Registry',
    badge: 'CRITICAL CONTRACT',
    badgeType: 'neutral',
    turnaround: 'Within 24 Hours',
    title: 'Agreement to Sell / Bayana Agreement (बयाना इकरारनामा)',
    description: 'Safe and binding legal agreement for buying or selling property. Protects advance token money, sets fixed registry deadlines, and defines penalty if the other party backs out.',
    keywords: 'bayana agreement to sell advance token agreement property contract ikrarnama jaipur',
    clientRequirements: [
      'Copy of property papers / Patta',
      'Agreed price, token amount, and payment terms (Cheque / RTGS)',
      'Agreed final registry date and handover details'
    ],
    advocateSafeguards: [
      'Clear clause on forfeiture or refund if deal is cancelled',
      'Protection against seller selling property to someone else',
      'Drafted on proper stamp paper with legal witnesses'
    ]
  },

  // 6. Registered Will / Vasiyatnama
  {
    id: 'registered-will',
    category: 'succession',
    categoryLabel: 'Family & Succession Papers',
    badge: 'FAMILY PROTECTION',
    badgeType: 'primary',
    turnaround: '2 Working Days',
    title: 'Will / Vasiyatnama Drafting & Registration (वसीयतनामा)',
    description: 'Drafting an airtight Will (वसीयत) to ensure your property, savings, and assets go to your chosen family members smoothly without disputes between children or relatives.',
    keywords: 'will vasiyat vasiyatnama registered will property distribution inheritance jaipur',
    clientRequirements: [
      'List of properties, house, shops, bank accounts, and gold',
      'Name of beneficiary (who will receive what)',
      'Two trusted witnesses (not beneficiaries under the Will)',
      'Medical fitness certificate (recommended for senior citizens)'
    ],
    advocateSafeguards: [
      'Clear language to prevent challenge on grounds of mental fitness',
      'Assistance with registration at the Sub-Registrar office',
      'Strict confidentiality assured'
    ]
  },

  // 7. Power of Attorney (GPA / SPA)
  {
    id: 'power-of-attorney',
    category: 'property',
    categoryLabel: 'Property Papers & Registry',
    badge: 'LEGAL AUTHORITY',
    badgeType: 'neutral',
    turnaround: 'Same Day / 24 Hours',
    title: 'Power of Attorney - GPA & SPA (मुख्तारनामा)',
    description: 'Give legal authority to a trusted family member or representative to manage, rent, sell, or handle court and government office work on your behalf.',
    keywords: 'power of attorney gpa spa mukhtarnama authorization representative jaipur',
    clientRequirements: [
      'Aadhaar card and photo of Principal (grantor)',
      'Aadhaar card and photo of Attorney holder',
      'Property details or specific purpose list'
    ],
    advocateSafeguards: [
      'Clear definition of permitted powers (no unauthorized powers)',
      'Stamp duty and registration compliance',
      'Revocation safeguards if needed later'
    ]
  },

  // 8. Rent Agreement & Lease Deed
  {
    id: 'rent-agreement',
    category: 'property',
    categoryLabel: 'Property Papers & Registry',
    badge: 'FAST TURNAROUND',
    badgeType: 'neutral',
    turnaround: 'Same Day (2–4 Hours)',
    title: 'Rent Agreement / Kirayanama (किरायानामा)',
    description: '11-month or multi-year registered lease deed for residential homes, shops, offices, and godowns. Protects landlords from illegal possession and tenants from arbitrary eviction.',
    keywords: 'rent agreement kirayanama lease deed tenant landlord shop rent residential jaipur',
    clientRequirements: [
      'Landlord & Tenant Aadhaar card and photos',
      'Rent amount, security deposit amount, and monthly due date',
      'Electricity / water meter reading and maintenance terms'
    ],
    advocateSafeguards: [
      'Clear eviction clause upon non-payment of rent',
      'Annual rent increase clause (normally 5% or 10%)',
      'Police verification format assistance'
    ]
  },

  // 9. Affidavits, Notary & Shapath Patra
  {
    id: 'affidavit-notary',
    category: 'notarial',
    categoryLabel: 'Affidavits & Court Notices',
    badge: 'INSTANT SERVICE',
    badgeType: 'neutral',
    turnaround: 'Same Day (Within 1–2 Hours)',
    title: 'Affidavits, Notary & Shapath Patra (शपथ पत्र / हलफनामा)',
    description: 'All types of sworn declarations on stamp paper: name change, gap in education, passport affidavit, address change, duplicate marksheet, lost property documents, and loan clearance.',
    keywords: 'affidavit shapath patra notary halafnama court stamp paper jaipur sessions court',
    clientRequirements: [
      'Aadhaar card or Government ID of deponent',
      'Details of matter requiring affidavit'
    ],
    advocateSafeguards: [
      'Correct legal language preventing mistakes or rejections',
      'Valid Notary Public stamping and registry entry'
    ]
  },

  // 10. Legal Notice (कानूनी नोटिस)
  {
    id: 'legal-notice',
    category: 'notarial',
    categoryLabel: 'Affidavits & Court Notices',
    badge: 'LEGAL ACTION',
    badgeType: 'primary',
    turnaround: '24–48 Hours',
    title: 'Statutory Legal Notice (वकील का कानूनी नोटिस)',
    description: 'Formal lawyer notice for bounced cheques (Section 138), money recovery, property dispute, breach of agreement, consumer complaint, or landlord-tenant eviction warning.',
    keywords: 'legal notice cheque bounce money recovery notice breach eviction notice advocate jaipur',
    clientRequirements: [
      'Details of transaction, bounced cheque, or unpaid bill',
      'Name, phone number, and address of the opposite party',
      'Copies of prior communication, bills, or agreement'
    ],
    advocateSafeguards: [
      'Strict adherence to statutory limitation periods (15 or 30 days)',
      'Sent via Registered Speed Post with tracking slip',
      'Firm legal warning that forces settlement before court filing'
    ]
  },

  // 11. Gift Deed & Family Partition (दान पत्र एवं बंटवारा)
  {
    id: 'gift-partition-deed',
    category: 'succession',
    categoryLabel: 'Family & Succession Papers',
    badge: 'FAMILY SETTLEMENT',
    badgeType: 'neutral',
    turnaround: '2–3 Days',
    title: 'Gift Deed & Family Partition Deed (दान पत्र एवं आपसी बंटवारा)',
    description: 'Transferring property to children, spouse, or relatives through a Gift Deed (दान पत्र) or dividing ancestral property amicably through a registered Partition Deed (बंटवारानामा).',
    keywords: 'gift deed daan patra partition deed batwara parivarik batwara ancestral property jaipur',
    clientRequirements: [
      'Title papers of property / ancestral house',
      'Family pedigree / list of all legal heirs',
      'ID proof of all family members agreeing to the division'
    ],
    advocateSafeguards: [
      'Takes advantage of government stamp duty rebates for blood relatives',
      'Mutual agreement signed to prevent any family court case in future',
      'Registered at Sub-Registrar office'
    ]
  },

  // 12. Name Change & Gazette Notification (नाम परिवर्तन)
  {
    id: 'name-change-gazette',
    category: 'certificate',
    categoryLabel: 'Certificates & Government Registrations',
    badge: 'OFFICIAL CHANGE',
    badgeType: 'neutral',
    turnaround: '3–5 Working Days',
    title: 'Name Change & Gazette Notification (नाम बदलना / गजट नोटिफिकेशन)',
    description: 'Complete legal process to change your name, correct spelling in school/college certificates, passport, Aadhaar card, or change surname after marriage.',
    keywords: 'name change gazette notification spelling correction aadhaar name change jaipur',
    clientRequirements: [
      'Current ID proof with old name',
      'Reason for name change (marriage, preference, error in certificate)',
      'Proposed new name with correct spelling'
    ],
    advocateSafeguards: [
      'Affidavit drafting before Judicial Magistrate / Notary',
      'Newspaper publication in Jaipur daily papers',
      'Rajasthan State Gazette application filing'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Rameshwar Sharma',
    designation: 'Resident, Mansarovar, Jaipur',
    domain: 'Property Registry & Sale Deed',
    quote: 'Advocate Deepak Goyal helped us in the registry of our house in Mansarovar. He thoroughly checked the original patta, calculated the correct DLC stamp duty, and got the registry completed without any delay at the Sub-Registrar office. Very humble and honest lawyer.',
    rating: 5
  },
  {
    id: '2',
    clientName: 'Kailash Meena',
    designation: 'Businessman, Vaishali Nagar, Jaipur',
    domain: 'Marriage & Birth Certificates',
    quote: 'Needed marriage certificate and passport birth papers urgently for my daughter. Advocate Goyal handled the affidavits and government municipal process smoothly. Everything was done in 2 days. Highly recommended in Jaipur Sessions Court.',
    rating: 5
  },
  {
    id: '3',
    clientName: 'Smt. Shanti Devi & Family',
    designation: 'C-Scheme, Jaipur',
    domain: 'Family Will & Succession Papers',
    quote: 'We wanted to prepare a clear registered Will (वसीयत) and family partition paper. Deepak ji explained everything in simple Hindi, cleared all our doubts with great patience, and ensured no dispute remains between our sons.',
    rating: 5
  },
  {
    id: '4',
    clientName: 'Mahendra Singh Rathore',
    designation: 'Ajmer Road, Jaipur',
    domain: 'Rent Agreement & Legal Notice',
    quote: 'Our tenant was refusing to vacate our commercial shop. Advocate Deepak Goyal sent a strong legal notice from Jaipur Sessions Court, and within 15 days the matter was peacefully resolved and possession handed back.',
    rating: 5
  }
];

export const FAQS = [
  {
    question: 'How do I book a consultation with Advocate Deepak Goyal?',
    answer: 'You can directly call or message on WhatsApp at 9828089628, or fill the short form on this website. The details will be sent straight to Advocate Deepak Goyal\'s phone, and you will receive a quick callback.'
  },
  {
    question: 'Where is the chamber located in Jaipur?',
    answer: 'The chamber is located right near District & Sessions Court, Collectorate Circle, Bani Park, Jaipur. Both morning court hours and evening consultations are available.'
  },
  {
    question: 'Can I get help with Marriage, Birth, and Death certificates?',
    answer: 'Yes, we provide complete legal assistance for Marriage Registration, Birth Certificates (including late SDM court orders), and Death / Legal Heir (Warisan) certificates with all necessary affidavits.'
  },
  {
    question: 'Do you verify property papers before giving advance token money?',
    answer: 'Yes! We check the complete chain of property papers, Registry, Patta, JDA/Municipal approvals, and prepare safe Bayana (Agreement to Sell) to ensure your money remains 100% safe.'
  },
  {
    question: 'Will Advocate Deepak Goyal accompany us to the Sub-Registrar office?',
    answer: 'Yes, Advocate Deepak Goyal and our team assist you personally at the Sub-Registrar office in Jaipur for biometric signing, document submission, and collecting the registered deed.'
  }
];
