const users = [
  {
    first_name: 'عبير عادل',
    last_name: 'غزال',
    email: 'abeerghazal@gmail.com',
    phone_number: '0591000100',
    role: 'admin',
    hashed_password: '$2b$10$Jmmc3q92bmJIx4HeRMvnZOHs4yXwEjQi0mcf0x.Z2LyJ9VBcVQA1W',
  },
  {
    first_name: 'لينا',
    last_name: 'تربان',
    email: 'linaturban2001@gmail.com',
    phone_number: '0591000200',
    role: 'user',
    hashed_password: '$2b$10$Jmmc3q92bmJIx4HeRMvnZOHs4yXwEjQi0mcf0x.Z2LyJ9VBcVQA1W',
  },
  {
    first_name: 'ربا',
    last_name: 'عبد الله',
    email: 'tlobe2@angelfire.com',
    phone_number: '595264875',
    role: 'user',
    hashed_password: '$2b$10$Jmmc3q92bmJIx4HeRMvnZOHs4yXwEjQi0mcf0x.Z2LyJ9VBcVQA1W',
  },
  {
    first_name: 'رواء',
    last_name: 'محمد',
    email: 'mgravey3@slideshare.net',
    phone_number: '172-408-5906',
    role: 'user',
    hashed_password: '$2b$10$Jmmc3q92bmJIx4HeRMvnZOHs4yXwEjQi0mcf0x.Z2LyJ9VBcVQA1W',
  },
  {
    first_name: 'نزهة',
    last_name: 'غزال',
    email: 'mu7ammadabed@gmail.com',
    phone_number: '0597784083',
    role: 'user',
    hashed_password: '$2b$10$Jmmc3q92bmJIx4HeRMvnZOHs4yXwEjQi0mcf0x.Z2LyJ9VBcVQA1W',
  },
  {
    first_name: 'علا',
    last_name: 'الهادي',
    email: 'mu7ammadabed@gmail.com',
    phone_number: '0569805073',
    role: 'admin',
    hashed_password: '$2b$10$Jmmc3q92bmJIx4HeRMvnZOHs4yXwEjQi0mcf0x.Z2LyJ9VBcVQA1W',
  },
];

const payments = [
  {
    title: 'دفع فاتورة',
    description:
      'لقد قمت بدفع فاتورة بقيمة 80 شيكل',
    BillId: 4,
  },
  {
    title: 'دفع فاتورة',
    description:
      'لقد قمت بدفع فاتورة بقيمة 70 شيكل',
    BillId: 3,
  },
  {
    title: 'دفع فاتورة',
    description:
      'لقد قمت بدفع فاتورة بقيمة 90 شيكل',
    BillId: 1,
  },
];

const announcements = [
  {
    title:
      'تنبيه لسكان البرج الكرام: فصل الطاقة الشمسية على الساعة السابعة مساء اليوم',
    start_date: '20/10/2025',
    end_date: '21/10/2025',
  },
  {
    title:
      '  تنبيه لسكان البرج الكرام: نعلمكم بأنه سيتم اليوم اغلاق المصعد لأغراض الصيانة على الساعة السادسة مساء لمدة ساعة',
    start_date: '20/10/2025',
    end_date: '21/10/2025',
  },
  {
    title:
      'اليوم سيتم الاحتفال بذكرى انشاء البرج الثالثة الساعة السابعة مساء على الروف نتمنى حضوركم',
    start_date: '20/10/2025',
    end_date: '21/10/2025',
  },
];

const advertisements = [
  {
    title: 'شقة متاحة',
    description:
      ' متاح لدينا شقة فارغة بمساحة 140 متر  مربع تحتوي على 3 غرف نوم ومطبخ على الطابق الرابع للمزيد من المعلومات يرجى التواصل',
    start_date: '20/10/2025',
    end_date: '30/10/2025',
    image:
      'https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    title: 'مطلوب  عامل نظافة',
    description: 'البرج بحاجة الى عامل نظافة براتب 800 شيكل شهريا ',
    start_date: '20/10/2025',
    end_date: '30/10/2025',
    image:
      'https://images.pexels.com/photos/6197123/pexels-photo-6197123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'شقة متاحة ',
    description:
      'متاح لدينا شقة فارغة بمساحة 190 متر  مربع تحتوي على 3 غرف نوم ومطبخ على الطابق الخامس للمزيد من المعلومات يرجى التواصل',
    start_date: '20/10/2025',
    end_date: '30/10/2025',
    image:
      'https://images.pexels.com/photos/5417293/pexels-photo-5417293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

const complaints = [
  {
    title: 'شكوى رقم 1',
    description: 'تفاصيل الشكوى',
    UserId: 1,
  },
  {
    title: 'شكوى رقم 2',
    description: 'تفاصيل الشكوى',
    UserId: 2,
  },
  {
    title: 'شكوى رقم 3',
    description: 'تفاصيل الشكوى',
    UserId: 3,
  },
];

const contactUs = [
  {
    name: 'رشا',
    email: 'rasha@gmail.com',
    phone: '059200000',
    subject: 'شقق متوفرة',
    description: 'هل يوجد شقق غربية متوفرة بمساحة 190متر ؟',
  },
  {
    name: 'سوزان عكيلة',
    email: 'suzan@gmail.com',
    phone: '0592611255',
    subject: 'الموقع الجغرافي',
    description: 'اين توجد هذه العمارة بالتحديد ؟',
  },
  {
    name: 'عيسى',
    email: 'issa@gmail.com',
    phone: '059299800',
    subject: 'حارس عمارة',
    description: 'هل تحتاجون حارس عمارة ؟',
  },
  {
    name: 'بيان عبد الله',
    email: 'bayan_abd@gmail.com',
    phone: '0592997561',
    subject: 'تملك اكثر من شقة',
    description: 'هل يمكن لشخص واحد تملك اكثر من شقة وجمعهم مع بعض سوياً ؟',
  },
  {
    name: 'مي الاحمد',
    email: 'mai@gmail.com',
    phone: '0592007561',
    subject: 'مصمم',
    description: 'هل تحتاجون لمصمم ديكور ؟',
  },
];
const services = [
  {
    name: 'خدمات عامة',
    price: 100,
    isFixed: true,
    description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
    isOpen: true,
  },
  {
    name: 'مياه صحية',
    price: 0,
    isFixed: false,
    description: 'مياه صحية على مدار 24 ساعة',
    isOpen: true,
  },
  {
    name: 'مياه حلوة',
    price: 0,
    isFixed: false,
    description: 'مياه حلوة صالحة للشرب',
    isOpen: true,
  },
  {
    name: 'كهرباء ',
    price: 0,
    isFixed: false,
    description: 'يتم قراءة عداد الكهرباء كل شهر',
    isOpen: true,
  },
  {
    name: 'مصف سيارات',
    price: 25,
    isFixed: true,
    description: 'مصف سيارات لسكان البرج',
    isOpen: false,
  },
];

const bills = [
  {
    total_price: 315,
    FlatId: 1,
    is_open: true,
    services: [
      {
        name: 'خدمات عامة',
        price: 100,
        isFixed: true,
        description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
        isOpen: true,
      },
      {
        name: 'مياه صحية',
        price: 50,
        isFixed: false,
        description: 'مياه صحية على مدار 24 ساعة',
        isOpen: true,
      },
      {
        name: 'مياه حلوة',
        price: 20,
        isFixed: false,
        description: 'مياه حلوة صالحة للشرب',
        isOpen: true,
      },
      {
        name: 'كهرباء ',
        price: 120,
        isFixed: false,
        description: 'يتم قراءة عداد الكهرباء كل شهر',
        isOpen: false,
      },
      {
        name: 'مصف سيارات',
        price: 25,
        isFixed: true,
        description: 'مصف سيارات لسكان البرج',
        isOpen: false,
      },
    ],
  },
  {
    total_price: 335,
    FlatId: 1,
    is_open: false,
    services: [
      {
        name: 'خدمات عامة',
        price: 100,
        isFixed: true,
        description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
        isOpen: true,
      },
      {
        name: 'مياه صحية',
        price: 70,
        isFixed: false,
        description: 'مياه صحية على مدار 24 ساعة',
        isOpen: true,
      },
      {
        name: 'مياه حلوة',
        price: 20,
        isFixed: false,
        description: 'مياه حلوة صالحة للشرب',
        isOpen: true,
      },
      {
        name: 'كهرباء ',
        price: 120,
        isFixed: false,
        description: 'يتم قراءة عداد الكهرباء كل شهر',
        isOpen: true,
      },
      {
        name: 'مصف سيارات',
        price: 25,
        isFixed: true,
        description: 'مصف سيارات لسكان البرج',
        isOpen: true,
      },
    ],
  },
  {
    total_price: 315,
    FlatId: 1,
    is_open: true,
    services: [
      {
        name: 'خدمات عامة',
        price: 100,
        isFixed: true,
        description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
        isOpen: true,
      },
      {
        name: 'مياه صحية',
        price: 50,
        isFixed: false,
        description: 'مياه صحية على مدار 24 ساعة',
        isOpen: true,
      },
      {
        name: 'مياه حلوة',
        price: 20,
        isFixed: false,
        description: 'مياه حلوة صالحة للشرب',
        isOpen: true,
      },
      {
        name: 'كهرباء ',
        price: 120,
        isFixed: false,
        description: 'يتم قراءة عداد الكهرباء كل شهر',
        isOpen: true,
      },
      {
        name: 'مصف سيارات',
        price: 25,
        isFixed: true,
        description: 'مصف سيارات لسكان البرج',
        isOpen: true,
      },
    ],
  },
  {
    total_price: 370,
    FlatId: 2,
    is_open: true,
    services: [
      {
        name: 'خدمات عامة',
        price: 100,
        isFixed: true,
        description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
        isOpen: true,
      },
      {
        name: 'مياه صحية',
        price: 70,
        isFixed: false,
        description: 'مياه صحية على مدار 24 ساعة',
        isOpen: true,
      },
      {
        name: 'مياه حلوة',
        price: 15,
        isFixed: false,
        description: 'مياه حلوة صالحة للشرب',
        isOpen: true,
      },
      {
        name: 'كهرباء ',
        price: 160,
        isFixed: false,
        description: 'يتم قراءة عداد الكهرباء كل شهر',
        isOpen: true,
      },
      {
        name: 'مصف سيارات',
        price: 25,
        isFixed: true,
        description: 'مصف سيارات لسكان البرج',
        isOpen: true,
      },
    ],
  },
  {
    total_price: 255,
    FlatId: 3,
    is_open: true,
    services: [
      {
        name: 'خدمات عامة',
        price: 100,
        isFixed: true,
        description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
        isOpen: true,
      },
      {
        name: 'مياه صحية',
        price: 40,
        isFixed: false,
        description: 'مياه صحية على مدار 24 ساعة',
        isOpen: true,
      },
      {
        name: 'مياه حلوة',
        price: 10,
        isFixed: false,
        description: 'مياه حلوة صالحة للشرب',
        isOpen: true,
      },
      {
        name: 'كهرباء ',
        price: 80,
        isFixed: false,
        description: 'يتم قراءة عداد الكهرباء كل شهر',
        isOpen: true,
      },
      {
        name: 'مصف سيارات',
        price: 25,
        isFixed: true,
        description: 'مصف سيارات لسكان البرج',
        isOpen: true,
      },
    ],
  },
  {
    total_price: 205,
    FlatId: 3,
    is_open: true,
    services: [
      {
        name: 'خدمات عامة',
        price: 100,
        isFixed: true,
        description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
        isOpen: true,
      },
      {
        name: 'مياه صحية',
        price: 40,
        isFixed: false,
        description: 'مياه صحية على مدار 24 ساعة',
        isOpen: true,
      },
      {
        name: 'مياه حلوة',
        price: 10,
        isFixed: false,
        description: 'مياه حلوة صالحة للشرب',
        isOpen: true,
      },
      {
        name: 'كهرباء ',
        price: 30,
        isFixed: false,
        description: 'يتم قراءة عداد الكهرباء كل شهر',
        isOpen: true,
      },
      {
        name: 'مصف سيارات',
        price: 25,
        isFixed: true,
        description: 'مصف سيارات لسكان البرج',
        isOpen: true,
      },
    ],
  },
  {
    total_price: 355,
    FlatId: 4,
    is_open: true,
    services: [
      {
        name: 'خدمات عامة',
        price: 100,
        isFixed: true,
        description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
        isOpen: true,
      },
      {
        name: 'مياه صحية',
        price: 50,
        isFixed: false,
        description: 'مياه صحية على مدار 24 ساعة',
        isOpen: true,
      },
      {
        name: 'مياه حلوة',
        price: 40,
        isFixed: false,
        description: 'مياه حلوة صالحة للشرب',
        isOpen: true,
      },
      {
        name: 'كهرباء ',
        price: 140,
        isFixed: false,
        description: 'يتم قراءة عداد الكهرباء كل شهر',
        isOpen: true,
      },
      {
        name: 'مصف سيارات',
        price: 25,
        isFixed: true,
        description: 'مصف سيارات لسكان البرج',
        isOpen: true,
      },
    ],
  }, {
    total_price: 355,
    FlatId: 5,
    is_open: true,
    services: [
      {
        name: 'خدمات عامة',
        price: 100,
        isFixed: true,
        description: 'الخدمات العامة تشمل النظافة والمصعد والعناية بالحديقة والامان',
        isOpen: true,
      },
      {
        name: 'مياه صحية',
        price: 50,
        isFixed: false,
        description: 'مياه صحية على مدار 24 ساعة',
        isOpen: true,
      },
      {
        name: 'مياه حلوة',
        price: 40,
        isFixed: false,
        description: 'مياه حلوة صالحة للشرب',
        isOpen: true,
      },
      {
        name: 'كهرباء ',
        price: 140,
        isFixed: false,
        description: 'يتم قراءة عداد الكهرباء كل شهر',
        isOpen: true,
      },
      {
        name: 'مصف سيارات',
        price: 25,
        isFixed: true,
        description: 'مصف سيارات لسكان البرج',
        isOpen: true,
      },
    ],
  },

];

const flats = [
  {
    flat_number: 101,
    area: 180,
    notes: 'شقة أرضية بمواصفات مميزة جدا · شقة جاهزة للبيع شرق برشلونة · شقة للببع خلف شارع الصناعة',
    is_active: true,
    UserId: 1,
  },
  {
    flat_number: 102,
    area: 160,
    notes: 'شقة جنوبية بمواصفات مميزة جدا · شقة جاهزة للبيع شرق برشلونة · شقة للببع خلف شارع الصناعة',
    is_active: true,
    UserId: 2,
  },
  {
    flat_number: 103,
    area: 120,
    notes: 'شقة أرضية بمواصفات مميزة جدا · شقة جاهزة للبيع شرق برشلونة · شقة للببع خلف شارع الصناعة',
    is_active: true,
    UserId: 3,
  },
  {
    flat_number: 104,
    area: 140,
    notes: 'شقة جنوبية',
    is_active: true,
    UserId: 4,
  },
  {
    flat_number: 105,
    area: 250,
    notes: 'شقة شمالية',
    is_active: true,
    UserId: 1,

  },
  {
    flat_number: 106,
    area: 180,
    notes: 'شقة غربية',
    is_active: false,

  },
  {
    flat_number: 107,
    area: 200,
    notes: 'شقة شمالية',
    is_active: false,

  },
  {
    flat_number: 108,
    area: 190,
    notes: 'شقة جنوبية',
    is_active: false,
  },
  {
    flat_number: 109,
    area: 180,
    notes: 'شقة شرقية',
    is_active: false,

  },
  {
    flat_number: 110,
    area: 150,
    notes: 'شقة شمالية',
    is_active: false,

  },
  {
    flat_number: 111,
    area: 190,
    notes: 'شقة جنوبية',
    is_active: false,
  },
  {
    flat_number: 112,
    area: 180,
    notes: 'شقة شرقية',
    is_active: false,

  },
  {
    flat_number: 113,
    area: 150,
    notes: 'شقة شمالية',
    is_active: false,

  },
  {
    flat_number: 114,
    area: 190,
    notes: 'شقة جنوبية',
    is_active: false,
  },
  {
    flat_number: 115,
    area: 180,
    notes: 'شقة شرقية',
    is_active: false,

  },
  {
    flat_number: 116,
    area: 150,
    notes: 'شقة شمالية',
    is_active: false,

  },
];

export {
  announcements, advertisements, services, bills, flats, users, payments,
  complaints, contactUs,
};
