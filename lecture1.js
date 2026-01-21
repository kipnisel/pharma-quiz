// Pharmacology Basics - Lecture 1 Quiz Data
// Based on Pharmacokinetics Fundamentals lecture

const lecture1Data = [
    // Definition of Pharmacology
    {
        question: "What is Pharmacology?",
        options: [
            { text: "The study of drugs and their interactions with living systems", correct: true },
            { text: "The study of human anatomy", correct: false },
            { text: "The study of disease processes", correct: false },
            { text: "The study of surgical procedures", correct: false }
        ],
        category: "Definitions",
        explanation: "Pharmacology is the study of drugs and their interactions with living systems."
    },
    {
        question: "What is a drug?",
        options: [
            { text: "A substance that affects the function of living cells", correct: true },
            { text: "Only prescription medications", correct: false },
            { text: "Only substances that cause addiction", correct: false },
            { text: "Only synthetic chemicals", correct: false }
        ],
        category: "Definitions",
        explanation: "A drug is any substance that affects the function of living cells, used for treatment, prevention, or diagnosis of disease."
    },

    // Drug Naming
    {
        question: "Which type of drug name is unique and owned by a company?",
        options: [
            { text: "Trade name (Brand name)", correct: true },
            { text: "Generic name", correct: false },
            { text: "Chemical name", correct: false },
            { text: "IUPAC name", correct: false }
        ],
        category: "Drug Naming",
        explanation: "Trade names (brand names) are unique names owned by pharmaceutical companies. Examples: Advil, Tylenol."
    },
    {
        question: "The generic name of a drug is also known as:",
        options: [
            { text: "Non-proprietary name", correct: true },
            { text: "Brand name", correct: false },
            { text: "Chemical formula", correct: false },
            { text: "Trade name", correct: false }
        ],
        category: "Drug Naming",
        explanation: "Generic name = Non-proprietary name. It is assigned by USAN (United States Adopted Names)."
    },
    {
        question: "Which drug name describes the chemical structure?",
        options: [
            { text: "Chemical name", correct: true },
            { text: "Generic name", correct: false },
            { text: "Trade name", correct: false },
            { text: "Brand name", correct: false }
        ],
        category: "Drug Naming",
        explanation: "Chemical names describe the drug's chemical structure. Example: N-acetyl-para-aminophenol (acetaminophen)."
    },

    // Drug Development Phases
    {
        question: "In which phase of clinical trials is a drug first tested on humans?",
        options: [
            { text: "Phase 1", correct: true },
            { text: "Phase 2", correct: false },
            { text: "Phase 3", correct: false },
            { text: "Phase 4", correct: false }
        ],
        category: "Drug Development",
        explanation: "Phase 1 trials are the first tests in humans, typically involving 20-100 healthy volunteers to assess safety and dosing."
    },
    {
        question: "Which phase of clinical trials involves thousands of patients and compares to standard therapy?",
        options: [
            { text: "Phase 3", correct: true },
            { text: "Phase 1", correct: false },
            { text: "Phase 2", correct: false },
            { text: "Phase 4", correct: false }
        ],
        category: "Drug Development",
        explanation: "Phase 3 involves 1,000-6,000 patients and compares the new drug to standard therapy or placebo."
    },
    {
        question: "Post-marketing surveillance occurs in which phase?",
        options: [
            { text: "Phase 4", correct: true },
            { text: "Phase 1", correct: false },
            { text: "Phase 2", correct: false },
            { text: "Phase 3", correct: false }
        ],
        category: "Drug Development",
        explanation: "Phase 4 is post-marketing surveillance, monitoring the drug after FDA approval for rare or long-term adverse effects."
    },
    {
        question: "Phase 2 clinical trials primarily assess:",
        options: [
            { text: "Effectiveness in patients with target disease", correct: true },
            { text: "Safety in healthy volunteers", correct: false },
            { text: "Post-marketing surveillance", correct: false },
            { text: "Comparison with standard therapy", correct: false }
        ],
        category: "Drug Development",
        explanation: "Phase 2 involves 100-500 patients with the target disease to assess effectiveness."
    },

    // FDA Pregnancy Categories
    {
        question: "Which FDA pregnancy category indicates 'No risk in controlled human studies'?",
        options: [
            { text: "Category A", correct: true },
            { text: "Category B", correct: false },
            { text: "Category C", correct: false },
            { text: "Category D", correct: false }
        ],
        category: "FDA Categories",
        explanation: "Category A: No risk in controlled human studies."
    },
    {
        question: "Which FDA pregnancy category indicates drugs that are contraindicated in pregnancy?",
        options: [
            { text: "Category X", correct: true },
            { text: "Category D", correct: false },
            { text: "Category C", correct: false },
            { text: "Category B", correct: false }
        ],
        category: "FDA Categories",
        explanation: "Category X: Contraindicated - risks clearly outweigh benefits."
    },
    {
        question: "Category D in FDA pregnancy classification means:",
        options: [
            { text: "Positive evidence of risk, but benefits may outweigh risks", correct: true },
            { text: "No risk demonstrated", correct: false },
            { text: "Contraindicated in pregnancy", correct: false },
            { text: "No animal studies available", correct: false }
        ],
        category: "FDA Categories",
        explanation: "Category D: Positive evidence of risk, but benefits may outweigh risks in serious conditions."
    },

    // Pharmacokinetics - General
    {
        question: "What does ADME stand for in pharmacokinetics?",
        options: [
            { text: "Absorption, Distribution, Metabolism, Excretion", correct: true },
            { text: "Administration, Dosing, Monitoring, Evaluation", correct: false },
            { text: "Action, Duration, Mechanism, Effect", correct: false },
            { text: "Agonist, Drug, Membrane, Enzyme", correct: false }
        ],
        category: "Pharmacokinetics",
        explanation: "ADME = Absorption, Distribution, Metabolism, Excretion - the four main processes of pharmacokinetics."
    },
    {
        question: "Pharmacokinetics is best described as:",
        options: [
            { text: "What the body does to the drug", correct: true },
            { text: "What the drug does to the body", correct: false },
            { text: "How drugs interact with receptors", correct: false },
            { text: "The study of drug side effects", correct: false }
        ],
        category: "Pharmacokinetics",
        explanation: "Pharmacokinetics = what the body does to the drug. Pharmacodynamics = what the drug does to the body."
    },
    {
        question: "Pharmacodynamics is best described as:",
        options: [
            { text: "What the drug does to the body", correct: true },
            { text: "What the body does to the drug", correct: false },
            { text: "How drugs are absorbed", correct: false },
            { text: "How drugs are excreted", correct: false }
        ],
        category: "Pharmacokinetics",
        explanation: "Pharmacodynamics = what the drug does to the body (drug effects and mechanisms)."
    },

    // Routes of Administration
    {
        question: "Which route of administration has 100% bioavailability?",
        options: [
            { text: "Intravenous (IV)", correct: true },
            { text: "Oral", correct: false },
            { text: "Intramuscular", correct: false },
            { text: "Subcutaneous", correct: false }
        ],
        category: "Routes of Administration",
        explanation: "IV administration delivers the drug directly into the bloodstream, giving 100% bioavailability."
    },
    {
        question: "Enteral routes of administration include all EXCEPT:",
        options: [
            { text: "Intravenous", correct: true },
            { text: "Oral", correct: false },
            { text: "Sublingual", correct: false },
            { text: "Rectal", correct: false }
        ],
        category: "Routes of Administration",
        explanation: "Enteral routes involve the GI tract: oral, sublingual, buccal, rectal. IV is a parenteral route."
    },
    {
        question: "Which route bypasses first-pass metabolism?",
        options: [
            { text: "Sublingual", correct: true },
            { text: "Oral", correct: false },
            { text: "Gastric tube", correct: false },
            { text: "Rectal (partially)", correct: false }
        ],
        category: "Routes of Administration",
        explanation: "Sublingual absorption goes directly into systemic circulation, bypassing the liver's first-pass metabolism."
    },
    {
        question: "First-pass metabolism occurs primarily in:",
        options: [
            { text: "The liver", correct: true },
            { text: "The kidneys", correct: false },
            { text: "The lungs", correct: false },
            { text: "The stomach", correct: false }
        ],
        category: "Routes of Administration",
        explanation: "First-pass metabolism occurs in the liver when drugs absorbed from the GI tract pass through the portal circulation."
    },

    // Absorption
    {
        question: "Most drugs cross cell membranes by:",
        options: [
            { text: "Passive diffusion", correct: true },
            { text: "Active transport", correct: false },
            { text: "Pinocytosis", correct: false },
            { text: "Facilitated diffusion", correct: false }
        ],
        category: "Absorption",
        explanation: "Passive diffusion is the most common mechanism for drug absorption across cell membranes."
    },
    {
        question: "Which form of a weak acid drug is better absorbed?",
        options: [
            { text: "Unionized (uncharged) form", correct: true },
            { text: "Ionized (charged) form", correct: false },
            { text: "Salt form", correct: false },
            { text: "Hydrated form", correct: false }
        ],
        category: "Absorption",
        explanation: "Unionized (uncharged) forms are more lipid soluble and cross cell membranes more easily."
    },
    {
        question: "A weak acid drug is best absorbed in:",
        options: [
            { text: "Acidic environment (stomach)", correct: true },
            { text: "Basic environment (intestine)", correct: false },
            { text: "Neutral environment", correct: false },
            { text: "It doesn't matter", correct: false }
        ],
        category: "Absorption",
        explanation: "Weak acids are more unionized in acidic environments, making them better absorbed in the stomach."
    },
    {
        question: "A weak base drug is best absorbed in:",
        options: [
            { text: "Basic environment (intestine)", correct: true },
            { text: "Acidic environment (stomach)", correct: false },
            { text: "Neutral environment", correct: false },
            { text: "It doesn't matter", correct: false }
        ],
        category: "Absorption",
        explanation: "Weak bases are more unionized in basic environments, making them better absorbed in the intestine."
    },

    // Bioavailability
    {
        question: "Bioavailability (F) is defined as:",
        options: [
            { text: "Fraction of administered drug that reaches systemic circulation", correct: true },
            { text: "Total amount of drug in the body", correct: false },
            { text: "Rate of drug elimination", correct: false },
            { text: "Volume in which the drug distributes", correct: false }
        ],
        category: "Bioavailability",
        explanation: "Bioavailability (F) is the fraction of administered drug that reaches systemic circulation unchanged."
    },
    {
        question: "Which factor does NOT affect bioavailability?",
        options: [
            { text: "Patient's height", correct: true },
            { text: "First-pass metabolism", correct: false },
            { text: "Drug formulation", correct: false },
            { text: "Route of administration", correct: false }
        ],
        category: "Bioavailability",
        explanation: "Bioavailability is affected by first-pass metabolism, drug solubility, formulation, and route of administration."
    },

    // Distribution
    {
        question: "Volume of distribution (Vd) indicates:",
        options: [
            { text: "How widely a drug distributes in the body", correct: true },
            { text: "The actual volume of blood", correct: false },
            { text: "The rate of drug elimination", correct: false },
            { text: "The amount of drug absorbed", correct: false }
        ],
        category: "Distribution",
        explanation: "Vd is the theoretical volume needed to contain the total drug amount at plasma concentration."
    },
    {
        question: "A drug with high lipid solubility will have:",
        options: [
            { text: "Large volume of distribution", correct: true },
            { text: "Small volume of distribution", correct: false },
            { text: "No tissue distribution", correct: false },
            { text: "100% plasma protein binding", correct: false }
        ],
        category: "Distribution",
        explanation: "Lipid-soluble drugs distribute widely into tissues, resulting in large Vd."
    },
    {
        question: "Which protein is the main drug-binding protein in plasma?",
        options: [
            { text: "Albumin", correct: true },
            { text: "Globulin", correct: false },
            { text: "Fibrinogen", correct: false },
            { text: "Hemoglobin", correct: false }
        ],
        category: "Distribution",
        explanation: "Albumin is the primary plasma protein that binds drugs (especially acidic drugs)."
    },
    {
        question: "Only _____ drug can exert pharmacological effect:",
        options: [
            { text: "Unbound (free)", correct: true },
            { text: "Protein-bound", correct: false },
            { text: "Metabolized", correct: false },
            { text: "Ionized", correct: false }
        ],
        category: "Distribution",
        explanation: "Only unbound (free) drug can cross membranes and interact with receptors to produce effects."
    },

    // Metabolism
    {
        question: "Phase 1 metabolism reactions include all EXCEPT:",
        options: [
            { text: "Glucuronidation", correct: true },
            { text: "Oxidation", correct: false },
            { text: "Reduction", correct: false },
            { text: "Hydrolysis", correct: false }
        ],
        category: "Metabolism",
        explanation: "Phase 1 = oxidation, reduction, hydrolysis. Phase 2 = conjugation reactions like glucuronidation."
    },
    {
        question: "The primary site of drug metabolism is:",
        options: [
            { text: "Liver", correct: true },
            { text: "Kidney", correct: false },
            { text: "Lung", correct: false },
            { text: "Intestine", correct: false }
        ],
        category: "Metabolism",
        explanation: "The liver is the primary site of drug metabolism, containing most metabolizing enzymes."
    },
    {
        question: "Cytochrome P450 enzymes are involved in:",
        options: [
            { text: "Phase 1 metabolism", correct: true },
            { text: "Phase 2 metabolism", correct: false },
            { text: "Drug excretion", correct: false },
            { text: "Drug absorption", correct: false }
        ],
        category: "Metabolism",
        explanation: "CYP450 enzymes catalyze Phase 1 oxidation reactions, the most important pathway for drug metabolism."
    },
    {
        question: "Phase 2 metabolism typically makes drugs:",
        options: [
            { text: "More water soluble for excretion", correct: true },
            { text: "More lipid soluble", correct: false },
            { text: "More active", correct: false },
            { text: "More toxic", correct: false }
        ],
        category: "Metabolism",
        explanation: "Phase 2 conjugation reactions add polar groups, making drugs more water-soluble for renal excretion."
    },
    {
        question: "A prodrug is:",
        options: [
            { text: "An inactive compound converted to active drug in the body", correct: true },
            { text: "An active drug that becomes inactive", correct: false },
            { text: "A drug given before surgery", correct: false },
            { text: "A professional-grade medication", correct: false }
        ],
        category: "Metabolism",
        explanation: "Prodrugs are inactive compounds that undergo metabolism to become active drugs."
    },

    // Excretion
    {
        question: "The primary organ of drug excretion is:",
        options: [
            { text: "Kidney", correct: true },
            { text: "Liver", correct: false },
            { text: "Lung", correct: false },
            { text: "Skin", correct: false }
        ],
        category: "Excretion",
        explanation: "Kidneys are the primary organs for drug excretion, eliminating water-soluble drugs and metabolites."
    },
    {
        question: "Renal drug excretion involves all EXCEPT:",
        options: [
            { text: "Oxidation", correct: true },
            { text: "Glomerular filtration", correct: false },
            { text: "Tubular secretion", correct: false },
            { text: "Tubular reabsorption", correct: false }
        ],
        category: "Excretion",
        explanation: "Renal excretion involves filtration, secretion, and reabsorption. Oxidation is metabolism, not excretion."
    },
    {
        question: "Alkalinizing urine increases excretion of:",
        options: [
            { text: "Weak acids", correct: true },
            { text: "Weak bases", correct: false },
            { text: "Neutral drugs", correct: false },
            { text: "All drugs equally", correct: false }
        ],
        category: "Excretion",
        explanation: "Alkaline urine ionizes weak acids, preventing reabsorption and increasing excretion (ion trapping)."
    },

    // Half-Life
    {
        question: "Half-life (t½) is defined as:",
        options: [
            { text: "Time for plasma concentration to decrease by 50%", correct: true },
            { text: "Time for drug to be completely eliminated", correct: false },
            { text: "Time for drug to reach peak concentration", correct: false },
            { text: "Time for drug to be absorbed", correct: false }
        ],
        category: "Half-Life",
        explanation: "Half-life is the time required for plasma drug concentration to decrease by 50%."
    },
    {
        question: "Approximately how many half-lives are needed to reach steady state?",
        options: [
            { text: "4-5 half-lives", correct: true },
            { text: "1-2 half-lives", correct: false },
            { text: "10 half-lives", correct: false },
            { text: "It depends on the dose", correct: false }
        ],
        category: "Half-Life",
        explanation: "Steady state is reached after approximately 4-5 half-lives (>94% of final concentration)."
    },
    {
        question: "After 4 half-lives, what percentage of drug remains?",
        options: [
            { text: "6.25%", correct: true },
            { text: "25%", correct: false },
            { text: "12.5%", correct: false },
            { text: "50%", correct: false }
        ],
        category: "Half-Life",
        explanation: "After 4 half-lives: 100% → 50% → 25% → 12.5% → 6.25% remains."
    },

    // Kinetics
    {
        question: "First-order kinetics means:",
        options: [
            { text: "A constant fraction of drug is eliminated per unit time", correct: true },
            { text: "A constant amount of drug is eliminated per unit time", correct: false },
            { text: "The drug is eliminated immediately", correct: false },
            { text: "The drug is not metabolized", correct: false }
        ],
        category: "Kinetics",
        explanation: "First-order: constant fraction eliminated per time. Rate depends on concentration."
    },
    {
        question: "Zero-order kinetics means:",
        options: [
            { text: "A constant amount of drug is eliminated per unit time", correct: true },
            { text: "A constant fraction of drug is eliminated per unit time", correct: false },
            { text: "No drug is eliminated", correct: false },
            { text: "Elimination is instantaneous", correct: false }
        ],
        category: "Kinetics",
        explanation: "Zero-order: constant amount eliminated per time, regardless of concentration. Enzymes are saturated."
    },
    {
        question: "Which drug exhibits zero-order kinetics at therapeutic doses?",
        options: [
            { text: "Ethanol (alcohol)", correct: true },
            { text: "Aspirin", correct: false },
            { text: "Penicillin", correct: false },
            { text: "Ibuprofen", correct: false }
        ],
        category: "Kinetics",
        explanation: "Ethanol follows zero-order kinetics because alcohol dehydrogenase becomes saturated."
    },
    {
        question: "Most drugs follow which type of elimination kinetics?",
        options: [
            { text: "First-order", correct: true },
            { text: "Zero-order", correct: false },
            { text: "Second-order", correct: false },
            { text: "Mixed-order", correct: false }
        ],
        category: "Kinetics",
        explanation: "Most drugs follow first-order kinetics at therapeutic concentrations."
    },

    // Loading Dose
    {
        question: "The formula for loading dose is:",
        options: [
            { text: "LD = Vd × Cp", correct: true },
            { text: "LD = Cp / Vd", correct: false },
            { text: "LD = Clearance × t½", correct: false },
            { text: "LD = Dose / Bioavailability", correct: false }
        ],
        category: "Loading Dose",
        explanation: "Loading Dose = Volume of distribution × Target plasma concentration (LD = Vd × Cp)."
    },
    {
        question: "A loading dose is used to:",
        options: [
            { text: "Rapidly achieve therapeutic concentration", correct: true },
            { text: "Slowly build up drug levels", correct: false },
            { text: "Reduce side effects", correct: false },
            { text: "Increase half-life", correct: false }
        ],
        category: "Loading Dose",
        explanation: "Loading doses achieve therapeutic levels quickly without waiting for 4-5 half-lives."
    },

    // Clearance
    {
        question: "Clearance represents:",
        options: [
            { text: "Volume of plasma cleared of drug per unit time", correct: true },
            { text: "Amount of drug eliminated per dose", correct: false },
            { text: "Time to eliminate all drug", correct: false },
            { text: "Rate of drug absorption", correct: false }
        ],
        category: "Clearance",
        explanation: "Clearance is the volume of plasma from which drug is completely removed per unit time."
    },
    {
        question: "Total body clearance equals:",
        options: [
            { text: "Renal clearance + Hepatic clearance + Other clearance", correct: true },
            { text: "Renal clearance only", correct: false },
            { text: "Hepatic clearance only", correct: false },
            { text: "Vd × half-life", correct: false }
        ],
        category: "Clearance",
        explanation: "Total clearance is the sum of all organ clearances (kidney, liver, and other routes)."
    },

    // Pharmacodynamics
    {
        question: "An agonist is a drug that:",
        options: [
            { text: "Binds to a receptor and activates it", correct: true },
            { text: "Binds to a receptor and blocks it", correct: false },
            { text: "Prevents drug absorption", correct: false },
            { text: "Increases drug metabolism", correct: false }
        ],
        category: "Pharmacodynamics",
        explanation: "Agonists bind to receptors and produce a biological response (activate the receptor)."
    },
    {
        question: "An antagonist is a drug that:",
        options: [
            { text: "Binds to a receptor and blocks the effect of agonists", correct: true },
            { text: "Binds to a receptor and activates it", correct: false },
            { text: "Increases agonist effects", correct: false },
            { text: "Has no receptor interaction", correct: false }
        ],
        category: "Pharmacodynamics",
        explanation: "Antagonists bind to receptors but do not activate them, blocking the action of agonists."
    },
    {
        question: "A competitive antagonist:",
        options: [
            { text: "Can be overcome by increasing agonist concentration", correct: true },
            { text: "Cannot be overcome by any means", correct: false },
            { text: "Binds irreversibly to the receptor", correct: false },
            { text: "Binds to a different site than the agonist", correct: false }
        ],
        category: "Pharmacodynamics",
        explanation: "Competitive antagonists compete with agonists for the same binding site and can be overcome by higher agonist doses."
    },
    {
        question: "Efficacy refers to:",
        options: [
            { text: "Maximum effect a drug can produce", correct: true },
            { text: "Dose needed to produce 50% effect", correct: false },
            { text: "How quickly a drug works", correct: false },
            { text: "How long a drug lasts", correct: false }
        ],
        category: "Pharmacodynamics",
        explanation: "Efficacy (Emax) is the maximum response a drug can produce, regardless of dose."
    },
    {
        question: "Potency refers to:",
        options: [
            { text: "Amount of drug needed to produce a given effect", correct: true },
            { text: "Maximum effect a drug can produce", correct: false },
            { text: "Duration of drug action", correct: false },
            { text: "Speed of drug onset", correct: false }
        ],
        category: "Pharmacodynamics",
        explanation: "Potency is the dose required to produce a specific effect (ED50). Lower dose = higher potency."
    },
    {
        question: "ED50 represents:",
        options: [
            { text: "Dose producing 50% of maximum effect", correct: true },
            { text: "Dose that is lethal to 50% of subjects", correct: false },
            { text: "Dose that is toxic to 50% of subjects", correct: false },
            { text: "50% bioavailability", correct: false }
        ],
        category: "Pharmacodynamics",
        explanation: "ED50 (Effective Dose 50) is the dose that produces 50% of the maximum therapeutic effect."
    },

    // Therapeutic Index
    {
        question: "Therapeutic index (TI) is calculated as:",
        options: [
            { text: "TD50/ED50 or LD50/ED50", correct: true },
            { text: "ED50/TD50", correct: false },
            { text: "Emax/EC50", correct: false },
            { text: "Clearance/Vd", correct: false }
        ],
        category: "Therapeutic Index",
        explanation: "TI = TD50/ED50 (toxic dose/effective dose). Higher TI = safer drug."
    },
    {
        question: "A drug with a narrow therapeutic index:",
        options: [
            { text: "Requires careful monitoring of blood levels", correct: true },
            { text: "Is very safe to use", correct: false },
            { text: "Can be given in any dose", correct: false },
            { text: "Has no side effects", correct: false }
        ],
        category: "Therapeutic Index",
        explanation: "Narrow TI drugs (like warfarin, digoxin, lithium) need careful monitoring due to small margin between therapeutic and toxic doses."
    },

    // Drug Interactions
    {
        question: "A CYP450 inducer will:",
        options: [
            { text: "Increase metabolism of other drugs", correct: true },
            { text: "Decrease metabolism of other drugs", correct: false },
            { text: "Have no effect on other drugs", correct: false },
            { text: "Only affect its own metabolism", correct: false }
        ],
        category: "Drug Interactions",
        explanation: "CYP450 inducers (like rifampin, phenytoin) increase enzyme activity, speeding up metabolism of other drugs."
    },
    {
        question: "A CYP450 inhibitor will:",
        options: [
            { text: "Decrease metabolism of other drugs", correct: true },
            { text: "Increase metabolism of other drugs", correct: false },
            { text: "Increase drug absorption", correct: false },
            { text: "Decrease drug distribution", correct: false }
        ],
        category: "Drug Interactions",
        explanation: "CYP450 inhibitors (like ketoconazole, grapefruit juice) decrease enzyme activity, slowing metabolism of other drugs."
    },
    {
        question: "Synergism occurs when:",
        options: [
            { text: "Combined effect of two drugs is greater than sum of individual effects", correct: true },
            { text: "One drug cancels the effect of another", correct: false },
            { text: "Two drugs have no interaction", correct: false },
            { text: "One drug increases the toxicity of another", correct: false }
        ],
        category: "Drug Interactions",
        explanation: "Synergism (potentiation): 1 + 1 > 2. Combined effect exceeds the sum of individual effects."
    },

    // Special Populations
    {
        question: "Drug dosing in elderly patients often requires:",
        options: [
            { text: "Lower doses due to decreased renal/hepatic function", correct: true },
            { text: "Higher doses due to increased metabolism", correct: false },
            { text: "No adjustment needed", correct: false },
            { text: "More frequent dosing", correct: false }
        ],
        category: "Special Populations",
        explanation: "Elderly have decreased renal and hepatic function, requiring dose reductions for many drugs."
    },
    {
        question: "In renal failure, drugs that are primarily renally excreted will have:",
        options: [
            { text: "Increased half-life", correct: true },
            { text: "Decreased half-life", correct: false },
            { text: "Unchanged pharmacokinetics", correct: false },
            { text: "Increased metabolism", correct: false }
        ],
        category: "Special Populations",
        explanation: "Reduced renal function decreases clearance, leading to drug accumulation and prolonged half-life."
    }
];
