// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Aminem-Mohammadi', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [

        {
          title: 'SAPPHIRE: Standard Automatic Artifact Removal Pipeline for Simultaneous EEG–fMR',
          description: `<br/>
          • Automated gradient & BCG artifact correction.<br/>
          • Integrated IC classification and quality control. <br/>
          • Boosted signal-to-noise ratio to 6.7 dB.<br/>
          • Matched expert-level preprocessing performance.
          `,
          imageUrl:
          '/SAPHIRE.png',
          link: '',
        },
        {
          title: 'Functional Neural Assessment via Multimodal Neuroimaging of Feedback Processing in Monetary Decision-Making',
          description: `<br/>
          • Developed novel simultaneous EEG–fMRI gambling tasks.<br/>
          • Collected and managed multimodal datasets.<br/>
          • Identified neural mechanisms of feedback.
          `,
          imageUrl:
          '/Connectivity.png',
          link: '',
        },
        {
          title: 'Advanced EEG-Based Mapping of Default Mode Network Dysfunctions in Obsessive-Compulsive Disorder.',
          description: `<br/>
          • EEG source reconstruction.<br/>
          • ROI connectivity.<br/>
          • Default Mode Network functioning.<br/> 
          • Whole-brain source-level connectivity.
          `,
          imageUrl:
          '/DMN.png',
          link: '',
        },
        {
          title: 'Noninvasive Evaluation of Cortico-Muscular Synchrony as biomarker in ALS diognasis.',
          description:
            `<br/>
          • Collected simultaneous EEG–EMG data.<br/>
          • Developed detailed volume conduction models.<br/>
          • Performed cortico-muscular coherence analysis.<br/> 
          • Investigated brain–muscle delay.
          `,
          imageUrl:
            '/project1.PNG',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Amin M. Mohammadi',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Amin-M. Mohammadi',
    googlescholar: 'AM Mohammadi',
    researchGate: '',
    facebook: '',
    instagram: 'Aminmohamadi__',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'Aminem-Mohammadi.github.io',
    phone: '',
    email: 'Aminem.Mohamadi@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Research', 'Computational Neuroscience',
    'Medical Image and Signal Processing', 'BCI',
    'Neural Networks',
    'MATLAB',
    'Python',
  ],
  experiences: [
    {
      company: 'National Brain Mapping Laboratory',
      position: 'Data Scientist',
      from: 'Feb 2021',
      to: 'Present',
      companyLink: 'https://nbml.ir/en',
    },
    {
      company: 'University of Tehran',
      position: 'Research Assistant',
      from: 'Jul 2021',
      to: 'Present',
      companyLink: 'https://nbml.ir/en',
    },
    {
      company: 'Research Center for Biomedical Technologies and Robotics',
      position: 'Research Assistant',
      from: 'Jun 2018',
      to: 'jul 2021',
      companyLink: 'https://en.tums.ac.ir/en',
    },
  ],
  // certifications: [
  //   {
  //         name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'University of Tehran',
      degree: 'M.Sc. of Science',
      from: '2020',
      to: '2023',
    },
    {
      institution: 'Univesrity of Tehran',
      degree: 'B.Sc. of Science',
      from: '2014',
      to: '2019',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
    {
      title: 'Neural Encoding of Outcome Magnitude: Evidence from fMRI',
      conferenceName: 'ICBME, 2025',
      journalName: '',
      authors: '<strong>AM. Mohammadi</strong>, Sh. Mahmoudi, F. Hosseinzadeh, E. Ebrahimzadeh, H. Soltanian-Zadeh,',
      link: '',
      description:
        '',
    },
    {
      title: 'Feedback Related Negativity specifications in unpredictable gambling conditions',
      conferenceName: 'ACDSA, Aug 2025',
      journalName: '',
      authors: '<strong>AM. Mohammadi</strong>, E. Ebrahimzadeh, H. Soltanian-Zadeh,',
      link: 'https://www.acdsa.org/2025/prg_o.pdf',
      description:
        '',
    },
    {
      title: 'Neural Correlates of Reward and Punishment Processing During Gambling-Based Decision- Making: A Simultaneous EEG-fMRI Study',
      conferenceName: 'ICBME, 2025',
      journalName: '',
      authors: 'E. Ebrahimzadeh, <strong>AM. Mohammadi</strong>, A. Hammoud, L. Rajabion, H. Soltanian-Zadeh',
      link: '',
      description:
        '',
    },
    {
      title: 'A Standard Automatic Artifact removal pipeline for Simultaneous EEG-fMRI (SAPHIRE)',
      conferenceName: 'ICBME, 2025',
      journalName: '',
      authors: 'F. Hossenzadeh, <strong>AM. Mohammadi</strong>, M, Anvarifard, S, Keshavarz, E. Ebrahimzadeh, H. Soltanian-Zadeh,',
      link: '',
      description:
        '',
    },

    {
      title: 'Identifying Cognitive Resources in a Decision-Making during Gambling',
      conferenceName: 'Research Square, Jan 2025.',
      journalName: '',
      authors: '<strong>AM. Mohammadi</strong>, E. Ebrahimzadeh, N. Amin, H. Soltanian-Zadeh,',
      link: 'https://www.researchsquare.com/article/rs-5754204/v1',
      description:
        '',
    },
    {
      title: 'An Intelligent System for Real-Time Assessment of Cortico-Muscular Coupling Index in ALS Disease.',
      // conferenceName: 'Brain-Computer Interface Research: A State-of-the-Art Summary 12.',
      journalName: 'Springer Nature Switzerland, Mar 2025.',
      authors: 'A Keihani, S Sajadi, F Karbasi, E Garosi, <strong>AM Mohammadi</strong>, H Marzbani, ...',
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-80497-7_9',
      description:
        '',
    },
    {
      title: 'Sparse representation of brain signals offers effective computation of cortico-muscular coupling value to predict the task-related and non-task sEMG channels: A joint hdEEG-sEMG study.',
      conferenceName: '',
      journalName: 'PLOS One, Jul 2022.',
      authors: 'A Keihani, <strong>AM Mohammadi</strong>, H Marzbani, S Nafissi, MR Haidari, AH Jafari.',
      link: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0270757',
      // description:
      //   'This study enhances cortico-muscular coherence (CMC) analysis by using sparse representation of EEG signals to better detect coupling with task-related and non-task sEMG channels. High-density EEG-sEMG data from 15 subjects during motor tasks were analyzed using optimized machine learning models. The sparse representation approach (SVM, 88.12% accuracy) significantly outperformed the traditional CMC method (KNN, 50.83% accuracy) in distinguishing active from inactive muscle channels.'
    },
    {
      title: 'Computation of cortico-muscular coupling value to predict the task-related and non-task sEMG channels: A joint hdEEG-sEMG study using sparse representation of brain signals.',
      conferenceName: 'Society for neuroscience, Nov 2023.',
      journalName: '',
      authors: 'A Keihani, <strong>AM Mohammadi</strong>, H Marzbani, S Nafissi, AH Jafari, MR Haidari.',
      link: 'https://www.researchgate.net/publication/375718215_Computation_of_cortico-muscular_coupling_value_to_predict_the_task-related_and_non-task_sEMG_channels_A_joint_hdEEG-sEMG_study_using_sparse_representation_of_brain_signals',
      // description:
      //   'Cortico-muscular interactions play important role in sensorimotor control during motor task and are commonly studied by corticomuscular coherence(CMC) method using joint electroencephalogram-surface electromyogram (EEG-sEMG) signals. As noise and time delay between the two signals weaken the CMC value, coupling difference between non-task sEMG channels is often undetectable. We used sparse representation of EEG channels to compute CMC and detect coupling for task-related and non-task sEMG signals ',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'sunset',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      // 'light',
      // 'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'dim',
      // 'nord',
      'sunset',
      // 'procyon',
    ],

    // // Custom theme, applied to `procyon` theme
    // customTheme: {
    //   primary: '#004040',
    //   secondary: '#008080',
    //   accent: '#008080',
    //   neutral: '#007373',
    //   'base-100': '#5a4c03',
    //   '--rounded-box': '0.5rem',
    //   '--rounded-btn': '0.2rem',
    // },
  },

  biography: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        `I am <strong>Amin M. (Aminem) Mohammadi</strong>, a biomedical engineer passionate about the interface between the brain and machines. I earned my B.Sc. and M.Sc. degrees from the University of Tehran, where I specialized in EEG–fMRI integration, biomedical image and signal processing, and artificial intelligence. I graduated at the top of my class with a perfect GPA and received several national honors.<br/>

I currently serve as a <strong>Research Assistant</strong> at the Biomedical Engineering Laboratory at UT, where I contribute to neuroscience research through neuroimaging and signal analysis. In parallel, I work as a <strong>Biomedical Data Scientist and Engineer</strong> at the National Brain Mapping Laboratory (NBML), engaging in projects at the intersection of engineering, neuroscience, and data science. There, I have developed advanced tools for brain signal analysis and had the privilege of mentoring young researchers.<br/>

<strong>Collaboration</strong> is at the heart of my work. I thrive in team-oriented environments, actively contributing to shared goals, fostering open communication, and exchanging constructive feedback to drive progress. My research goals are brain–computer interfaces, and AI-application in neurosceience. Guided by curiosity and a commitment to improving lives through technology rooted in brain science, I strive to bring together leadership, technical innovation, and interdisciplinary vision to help shape the future of human–machine synergy.
`,
        },
  ],
  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="dddd.com"
  //     target="_blank"
  //     rel="noreferrer"
  //   >Aminem</a> and ❤️`, 

  enablePWA: true,
};

export default CONFIG;
