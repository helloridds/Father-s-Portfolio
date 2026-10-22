import { InstrumentItem, Testimonial } from '../types';

export const INSTRUMENTS: InstrumentItem[] = [
  // Category A: Real Estate & Conveyancing
  {
    id: 'sale-deed',
    category: 'real-estate',
    categoryLabel: 'Category A: Real Estate & Conveyancing',
    badge: 'PRIMARY CONVEYANCE',
    badgeType: 'primary',
    turnaround: '3–4 Chamber Working Days',
    title: 'Sale Deed / Absolute Title Conveyance',
    description: 'Full transfer of immovable freehold or leasehold interest. Crafted to prevent post-registration cancellation suits, featuring unequivocal consideration clauses and non-encumbrance indemnities.',
    keywords: 'sale deed title deed conveyance transfer property purchase buy flat land',
    clientRequirements: [
      'Original Allotment Letter / Prior Parent Deeds (30 Yrs)',
      'Approved Sanction Plan & NOC from RERA/Authority',
      'PAN Card, Aadhaar, and Two Formal Identifiers/Witnesses',
      'Property Tax Receipts & Sub-Registrar NOC receipt'
    ],
    advocateSafeguards: [
      'Explicit "Indemnity for Undisclosed Mortgages" covenant',
      'Physical Possession Handover recitals with keys schedule',
      'Stamp duty optimization within respective State Schedule',
      'Sub-Registrar personal presence and biometric liaisoning'
    ]
  },
  {
    id: 'agreement-to-sell',
    category: 'real-estate',
    categoryLabel: 'Category A: Real Estate & Conveyancing',
    badge: 'PRE-CLOSING CONTRACT',
    badgeType: 'neutral',
    turnaround: '24–48 Hours',
    title: 'Agreement to Sell (ATS) / Formal Bayana Agreement',
    description: 'The foundational contractual safeguard defining earnest money deposit terms, consequence of default, time-as-essence covenants, and Specific Relief Act enforceability.',
    keywords: 'agreement to sell ats bayana earnest money token advance cancellation specific performance',
    clientRequirements: [
      'Seller title proof & encumbrance certificate copy',
      'Token transaction banking proof (RTGS/Cheque details)',
      'List of agreed fixtures, fittings, and vacant date'
    ],
    advocateSafeguards: [
      'Automatic forfeiture or double compensation clauses',
      'Clear conditional exit on negative Title Search findings',
      'Bar on third-party creation of lien during pendency'
    ]
  },
  {
    id: 'gift-relinquishment-partition',
    category: 'real-estate',
    categoryLabel: 'Category A: Real Estate & Conveyancing',
    badge: 'ESTATE RESTRUCTURING',
    badgeType: 'neutral',
    turnaround: '2–3 Days',
    title: 'Gift Deed, Relinquishment Deed & Partition Deed',
    description: 'Instruments executed between family coparceners or natural love and affection conveyances without monetary consideration. Structurally drafted to withstand challenge on grounds of undue influence or coercion.',
    keywords: 'gift deed relinquishment deed partition deed family settlement co-owner release blood relative',
    clientRequirements: [
      'Genealogical Tree / Surviving Member Certificate',
      'Title deeds of ancestral or self-acquired asset',
      'Medical fitness certificate for elderly Donors'
    ],
    advocateSafeguards: [
      'Irrevocable acceptance endorsements by Donee',
      'Stamp duty concession compliance under local state laws',
      'Severance of coparcenary status in Partition instruments'
    ]
  },
  {
    id: 'title-search-report',
    category: 'real-estate',
    categoryLabel: 'Category A: Real Estate & Conveyancing',
    badge: 'DUE DILIGENCE CERTIFICATION',
    badgeType: 'secondary',
    turnaround: '4–6 Chamber Working Days',
    title: '30-Year Chain of Title & Encumbrance Verification Report',
    description: 'Comprehensive physical verification of Sub-Registrar Book I records, CERSAI database check, and revenue record tracing (Jamabandi/Khasra/Khatauni) for high-value acquisitions and institutional lenders.',
    keywords: 'title search 30 years encumbrance certificate non-encumbrance bank legal opinion sub-registrar inspection revenue records',
    clientRequirements: [
      'Copies of all historical title deeds since 1994',
      'Site layout blueprint, survey coordinates, property ID',
      'Current and previous electricity/water/tax records'
    ],
    advocateSafeguards: [
      'Formal Certificate of Marketable Title under Advocate seal',
      'Court litigation check across High Court and District e-Courts',
      'Land acquisition / notifications vetting under Sec. 4/6'
    ]
  },
  {
    id: 'mutation-municipal-transfer',
    category: 'real-estate',
    categoryLabel: 'Category A: Real Estate & Conveyancing',
    badge: 'REVENUE RECORDING',
    badgeType: 'neutral',
    turnaround: '3–5 Days Drafting',
    title: 'Mutation & Municipal Property Transfer Applications',
    description: 'Post-registration transition of ownership records in MCD, DDA, HUDA, or local municipal revenue registers to enable valid tax assessment in the new owner\'s name.',
    keywords: 'mutation municipal transfer dda mcd property tax assessment khata transfer',
    clientRequirements: [
      'Registered Conveyance / Sale Deed certified copy',
      'Up-to-date House Tax Assessment clearance receipt',
      'Indemnity Bond & Affidavit on judicial e-stamp'
    ],
    advocateSafeguards: [
      'Submission through official municipal zonal portal',
      'Liaisoning with Sub-Divisional Magistrate revenue desk',
      'Expedited issuance of updated Property Mutation Certificate'
    ]
  },

  // Category B: Succession, Estates & Family Law
  {
    id: 'registered-will-codicil',
    category: 'succession',
    categoryLabel: 'Category B: Succession, Estates & Family Law',
    badge: 'TESTAMENTARY SHIELD',
    badgeType: 'primary',
    turnaround: '2–3 Days',
    title: 'Registered Will & Codicil Drafting with Medical Protocol',
    description: 'Unassailable testamentary instruments drafted with contemporary soundness-of-mind clauses, videographed execution assistance, and physician certificates to ensure future Probate runs unimpeded.',
    keywords: 'will codicil testament registered will medical attestation executor probate estate succession',
    clientRequirements: [
      'Comprehensive inventory of real estate, bank FDs, demat portfolios',
      'Details of named Executor and substitute Executor',
      'Medical Fitness Certificate from registered MBBS practitioner',
      'KYC of two neutral witnesses (younger than testator preferred)'
    ],
    advocateSafeguards: [
      'Exclusion of suspicious circumstances under Sec. 63',
      'Explicit reasons for deliberate disinheritance of heirs',
      'Creation of protective testamentary trusts for minor beneficiaries'
    ]
  },
  {
    id: 'family-settlement-mou',
    category: 'succession',
    categoryLabel: 'Category B: Succession, Estates & Family Law',
    badge: 'DISPUTE PREVENTION',
    badgeType: 'neutral',
    turnaround: '4–7 Working Days',
    title: 'Family Settlement Agreement / MoU',
    description: 'Private consensual division of business empires and multi-generational properties. Structured to fall under Supreme Court precedents (Kale v. Deputy Director of Consolidation) where oral agreements reduced to writing require zero ad-valorem stamp duty if appropriately drafted.',
    keywords: 'family settlement mou memorandum of understanding amicable division dispute resolution probate avoidance',
    clientRequirements: [
      'Pedigree chart / Genealogical line of succession',
      'Schedule of joint family properties & corporate assets',
      'Draft consensus terms agreed by all branch heads'
    ],
    advocateSafeguards: [
      'Incorporation of mutual estoppel & release of rights',
      'Indemnity against separate partition suits by descendants',
      'High Court registration compliance to ensure binding effect'
    ]
  },
  {
    id: 'power-of-attorney-nri',
    category: 'succession',
    categoryLabel: 'Category B: Succession, Estates & Family Law',
    badge: 'DELEGATION INSTRUMENT',
    badgeType: 'neutral',
    turnaround: '24–48 Hours',
    title: 'General & Special Power of Attorney (GPA / SPA) with NRI Provisions',
    description: 'Precision agency deeds enabling trusted attorneys to represent properties, conduct banking, or execute registrations. Features specific Hague Apostille/Consular attestation workflows and Delhi Collector of Stamps adjudication protocols for Non-Resident Indians.',
    keywords: 'power of attorney gpa spa general special nri apostille embassy attestation adjudication',
    clientRequirements: [
      'Indian Passport and Overseas Resident Proof of Principal',
      'Specific schedule of property or banking mandate',
      'Aadhaar / Voter ID of appointed Attorney in India'
    ],
    advocateSafeguards: [
      'Embassy consular attestation clause compliance',
      'SDM / Collector of Stamps adjudication within statutory 90 days',
      'Strict limitation of attorney powers to prevent unauthorized alienation'
    ]
  },
  {
    id: 'succession-certificate-petitions',
    category: 'succession',
    categoryLabel: 'Category B: Succession, Estates & Family Law',
    badge: 'COURT PETITION',
    badgeType: 'neutral',
    turnaround: '3–5 Days Drafting',
    title: 'Succession Certificate Petitions & Legal Heir Declarations',
    description: 'Formal court filings under Section 372 of Indian Succession Act for claiming movable securities, debentures, bank lockers, and mutual funds upon intestate death.',
    keywords: 'succession certificate legal heir surviving member certificate bank claim shares transmission',
    clientRequirements: [
      'Death Certificate of Deceased from Registrar of Births & Deaths',
      'Details of movable securities, bank statements, share folios',
      'List of Class I legal heirs with surviving relationship proof'
    ],
    advocateSafeguards: [
      'District Judge court petition format compliant with CPC',
      'Publication in national newspapers for public citations',
      'Surety bond and administrative clearance protocols'
    ]
  },

  // Category C: Corporate & Commercial Contracts
  {
    id: 'partnership-llp-agreements',
    category: 'corporate',
    categoryLabel: 'Category C: Corporate & Commercial Contracts',
    badge: 'BUSINESS STRUCTURING',
    badgeType: 'neutral',
    turnaround: '2–4 Days',
    title: 'Partnership Deeds & LLP Master Operational Agreements',
    description: 'Comprehensive entity governance deeds establishing capital contributions, interest remuneration, deadlock resolution, non-compete protections, and swift non-judicial liquidation pathways.',
    keywords: 'partnership deed llp agreement limited liability profit sharing capital contribution exit clause dissolution',
    clientRequirements: [
      'Designated Partners\' DPIN and DSC credentials',
      'Proposed capital structure & profit-sharing ratio',
      'Registered office address proof & ROC name approval'
    ],
    advocateSafeguards: [
      'Section 40(b) Income Tax compliant remuneration clauses',
      'Shotgun deadlock exit mechanism for 50-50 equity partners',
      'Enforceable non-solicitation and IP assignment covenants'
    ]
  },
  {
    id: 'commercial-lease-deeds',
    category: 'corporate',
    categoryLabel: 'Category C: Corporate & Commercial Contracts',
    badge: 'HIGH ASSET LEASE',
    badgeType: 'primary',
    turnaround: '2–3 Days',
    title: 'Commercial Lease & Institutional Licensing Agreements',
    description: 'Bespoke tenancy structures for Grade-A office parks, retail outlets, and warehouses. Integrates water-tight lock-in terms, defined fit-out moratoriums, GST reverse charge clauses, and summary eviction procedures.',
    keywords: 'commercial lease leave license tenancy lock-in fit-out rent escalation eviction clause mall retail office',
    clientRequirements: [
      'Floor blueprint, super built-up vs carpet area ratio',
      'Escalation matrix (typically 15% every 3 years)',
      'Security deposit escrow terms and maintenance demarcations'
    ],
    advocateSafeguards: [
      'Mandatory registration under Section 17 Registration Act',
      'Unambiguous eviction trigger on consecutive rent defaults',
      'Indemnity against unauthorized structural alterations or sub-letting'
    ]
  },
  {
    id: 'msa-and-ndas',
    category: 'corporate',
    categoryLabel: 'Category C: Corporate & Commercial Contracts',
    badge: 'OPERATIONAL IP SHIELD',
    badgeType: 'neutral',
    turnaround: '24–48 Hours',
    title: 'Master Service Agreements (MSA) & Unilateral/Mutual NDAs',
    description: 'Defends enterprise trade secrets and proprietary code with clear Intellectual Property assignment covenants, strict non-solicitation, and pre-quantified liquidated damages.',
    keywords: 'msa nda master service agreement non disclosure confidentiality ip assignment vendor contract',
    clientRequirements: [
      'Statement of Work (SOW) deliverables and acceptance milestones',
      'Payment cycle and invoice dispute mechanism',
      'Definition of confidential information & term length'
    ],
    advocateSafeguards: [
      'Governing law & exclusive jurisdiction in Delhi Courts',
      'Arbitration under Delhi International Arbitration Centre (DIAC)',
      'Specific carve-outs for proprietary pre-existing IP'
    ]
  },
  {
    id: 'joint-development-agreements',
    category: 'corporate',
    categoryLabel: 'Category C: Corporate & Commercial Contracts',
    badge: 'DEVELOPMENT COLLABORATION',
    badgeType: 'neutral',
    turnaround: '5–7 Working Days',
    title: 'Joint Development Agreements (JDA) & Builder Collaborations',
    description: 'Safeguards landowning families partnering with real estate developers. Clearly bifurcates Owner Allocation vs Builder Allocation, milestone construction timelines, bank guarantees, and RERA compliance.',
    keywords: 'joint venture collaboration developer agreement builder floor jd jda revenue share far floor area ratio',
    clientRequirements: [
      'Demarcation and survey maps of the land parcel',
      'Sanctioned FAR (Floor Area Ratio) calculation report',
      'Proposed architectural elevation and floor-wise distribution'
    ],
    advocateSafeguards: [
      'Zero transfer of title until completion certificate is secured',
      'Time-bound penal interest for construction delays',
      'Irrevocable security deposit forfeiture on abandonment'
    ]
  },

  // Category D: General Legal Instruments & Court Notices
  {
    id: 'affidavits-and-indemnity-bonds',
    category: 'notarial',
    categoryLabel: 'Category D: General Legal Instruments & Court Notices',
    badge: 'SWORN INSTRUMENTS',
    badgeType: 'neutral',
    turnaround: 'Same-Day Turnaround (4–8 Hours)',
    title: 'Comprehensive Affidavits, Sworn Declarations & Indemnity Bonds',
    description: 'Statutory verification filings for lost title documents, mutation indemnities, bank death claims, name clarifications, and Court Section 65B digital evidence certificates.',
    keywords: 'affidavit indemnity bond sworn declaration change of name lost documents passport duplicate title deeds',
    clientRequirements: [
      'Police Non-Cognizable Report (NCR) for lost documents',
      'Government Photo ID proof of Deponent',
      'Clear recital of factual circumstances'
    ],
    advocateSafeguards: [
      'Verification under Notaries Act, 1952 with notary register entry',
      'Precise deponent swear clauses preventing perjury liabilities',
      'Execution on appropriate non-judicial e-stamp paper denomination'
    ]
  },
  {
    id: 'statutory-legal-notices',
    category: 'notarial',
    categoryLabel: 'Category D: General Legal Instruments & Court Notices',
    badge: 'STATUTORY ACTION',
    badgeType: 'primary',
    turnaround: '24–48 Hours',
    title: 'Statutory Legal Notices for Breach, Recovery & Consumer Petitions',
    description: 'Authoritative counsel demand notices issued under Section 138 Negotiable Instruments Act, Specific Performance notices under Section 16, consumer deficiency complaints, and pre-litigation conciliation notices.',
    keywords: 'legal notice demand notice section 138 cheque bounce breach recovery consumer complaint petition rera complaint',
    clientRequirements: [
      'Dishonored cheque and bank memo with return date',
      'Agreement / Contract breached by counterparty',
      'Record of past written demands or unpaid invoices'
    ],
    advocateSafeguards: [
      'Strict adherence to statutory 30-day limitation window',
      'Dispatch via Speed Post with Acknowledgment Due (AD) & email tracking',
      'Unambiguous reservation of civil and criminal rights'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Sunil Aggarwal',
    designation: 'Director, Apex Logistics Infra Pvt Ltd',
    domain: 'Commercial Real Estate',
    quote: 'Advocate Deepak Goyal caught a critical flaw in a 25-year-old mutation entry that three other property brokers and a bank evaluator missed. His thoroughness saved our firm from a potential ₹4.2 Crore title dispute. His Sub-Registrar handling was impeccably executed.',
    rating: 5
  },
  {
    id: '2',
    clientName: 'Dr. Meera & Rajesh Kapoor',
    designation: 'Non-Resident Indian (London, UK)',
    domain: 'NRI Power of Attorney & Sale',
    quote: 'Being based in London, selling our ancestral bungalow in South Delhi seemed daunting. Adv. Goyal prepared our Special PoA, guided us through the Indian High Commission attestation in the UK, and seamlessly managed the sale registry. Absolute peace of mind and integrity.',
    rating: 5
  },
  {
    id: '3',
    clientName: 'Vivek Chawla',
    designation: 'Senior Executive, Chawla Enterprises',
    domain: 'Family Estate & Will Drafting',
    quote: 'His calm temperament and exceptional legal drafting helped my elderly father structure his Will and execute a family partition settlement between three siblings amicably. He explained every clause with supreme patience. A true gentleman of the legal fraternity.',
    rating: 5
  },
  {
    id: '4',
    clientName: 'Harishankar Singhania',
    designation: 'Managing Partner, Singhania Textiles LLP',
    domain: 'Corporate Restructuring & Lease',
    quote: 'Drafted our 9-year commercial lease for our Gurugram corporate headquarters. When the developer attempted an arbitrary rent escalation, Advocate Goyal\'s lock-in and fit-out moratorium clauses saved us months of litigation and ₹85 Lakhs in unauthorized claims.',
    rating: 5
  }
];

export const FAQS = [
  {
    question: 'What is the standard consultation duration and fee structure?',
    answer: 'Standard initial chamber consultations run for 45 minutes of detailed one-on-one review with Advocate Deepak Goyal. Consultation fees are fixed, payable prior to chamber admission or commencement of tele-advisory, and are adjusted against full retainership should formal filing or deed drafting instructions follow.'
  },
  {
    question: 'How long does a comprehensive property title search report take?',
    answer: 'A standard 30-year non-encumbrance title search report across Sub-Registrar records and municipal bodies takes between 3 to 5 business working days. For urgent property registry transactions, expedited 48-hour vetting can be arranged upon initial review.'
  },
  {
    question: 'How is client confidentiality safeguarded during initial consultations?',
    answer: 'All discussions, whether in person or via telephonic channels, are strictly governed by professional legal privilege under Section 126 of the Indian Evidence Act, 1872. Documents entrusted to the chamber remain encrypted and accessible solely to Advocate Deepak Goyal and designated chamber associates.'
  },
  {
    question: 'Can consultation occur at the client’s corporate office or residence?',
    answer: 'Special on-site consultations for senior citizens, high-net-worth estate executions, or institutional board briefings are accommodated on select Saturdays and Sundays by special prior appointment with the chamber clerk.'
  },
  {
    question: 'Does your chamber provide physical representation at the Sub-Registrar office?',
    answer: 'Yes. Advocate Goyal personally accompanies clients for high-value conveyancing or designates senior chamber counsel to oversee the complete Sub-Registrar execution, biometric capture, fee token issuance, and prompt document collection across all Delhi NCR districts.'
  }
];
