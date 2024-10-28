// اطلاعات بالای سایت از جمله کاهس یا سود
let xAxisData =[
    { name: 'Jan', sale: 4000 },
    { name: 'Feb', sale: 3000 },
    { name: 'Mar', sale: 2000 },
    { name: 'Apr', sale: 2780 },
    { name: 'May', sale: 1890 },
    { name: 'Jun', sale: 2390 },
    { name: 'Jul', sale: 3490 },
    { name: 'Aug', sale: 4000 },
    { name: 'Sep', sale: 2500 },
    { name: 'Oct', sale: 5000 },
    { name: 'Nov', sale: 3500 },
    { name: 'Dec', sale: 4500 }
  ];
  // تمام

  // اطلاعات کاربر ها جدید
  const users = [
    {
      id: 1,
      username: "سارا محمدی",
      title: "برنامه‌نویس فرانت‌اند",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=75&fit=crop"
    },
    {
      id: 2, 
      username: "علی حسینی",
      title: "طراح گرافیک",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=75&fit=crop"
    },
    {
      id: 3,
      username: "مریم کریمی", 
      title: "مدیر محصول",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=75&fit=crop"
    },
    {
      id: 4,
      username: "امیر رضایی",
      title: "توسعه‌دهنده بک‌اند",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=75&fit=crop"
    },
    {
      id: 5,
      username: "نیلوفر احمدی",
      title: "طراح تجربه کاربری",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=75&fit=crop"
    },
    {
      id: 6,
      username: "محمد صادقی",
      title: "مهندس DevOps",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=75&fit=crop"
    },
    {
      id: 7,
      username: "زهرا عباسی",
      title: "مدیر پروژه",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=75&fit=crop"
    },
    {
      id: 8,
      username: "رضا نوری",
      title: "متخصص هوش مصنوعی",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=75&fit=crop"
    },
    {
      id: 9,
      username: "فاطمه موسوی",
      title: "تحلیلگر داده",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=75&fit=crop"
    },
    {
      id: 10,
      username: "حسین میرزایی",
      title: "مهندس نرم‌افزار",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=75&fit=crop"
    }
  ];
  // تمام

  // اطلاعت کابرد ای قدیمی ک خرید داشته اند
  const userAction = [
    {
        id: 1,
        username: "حسین میرزایی",
        title: "مهندس نرم‌افزار",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=75&fit=crop",
        registrationDate: "1402/08/15",
        amount: "2,450,000",
        status: "Approved"
    },
    {
        id: 2,
        username: "مریم احمدی",
        title: "طراح گرافیک",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=75&fit=crop",
        registrationDate: "1402/09/23",
        amount: "1,850,000",
        status: "Pending"
    },
    {
        id: 3,
        username: "علی محمدی",
        title: "مدیر محصول",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=75&fit=crop",
        registrationDate: "1402/10/01",
        amount: "3,200,000",
        status: "Decline"
    },
    {
        id: 4,
        username: "سارا کریمی",
        title: "تحلیلگر داده",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=75&fit=crop",
        registrationDate: "1402/11/12",
        amount: "4,150,000",
        status: "Approved"
    },
    {
        id: 5,
        username: "امیر رضایی",
        title: "توسعه‌دهنده موبایل",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=75&fit=crop",
        registrationDate: "1402/12/05",
        amount: "1,950,000",
        status: "Pending"
    },
    {
        id: 6,
        username: "نیلوفر حسینی",
        title: "طراح تجربه کاربری",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=75&fit=crop",
        registrationDate: "1402/12/20",
        amount: "2,750,000",
        status: "Approved"
    },
    {
        id: 7,
        username: "محمد صادقی",
        title: "مدیر پروژه",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=75&fit=crop",
        registrationDate: "1403/01/05",
        amount: "3,850,000",
        status: "Decline"
    },
    {
        id: 8,
        username: "زهرا نجفی",
        title: "متخصص سئو",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=75&fit=crop",
        registrationDate: "1403/01/15",
        amount: "2,250,000",
        status: "Pending"
    },
    {
        id: 9,
        username: "رضا کمالی",
        title: "برنامه‌نویس بک‌اند",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=75&fit=crop",
        registrationDate: "1403/01/25",
        amount: "1,650,000",
        status: "Approved"
    },
    {
        id: 10,
        username: "فاطمه موسوی",
        title: "مدیر دیجیتال مارکتینگ",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=75&fit=crop",
        registrationDate: "1403/02/01",
        amount: "4,950,000",
        status: "Pending"
    }
];
// تمام

// اطلاع کابران در صفحه یوزر
const usersPage = [
  {
      id: 1,
      fullName: "محمدرضا حسینی",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=75&fit=crop",
      isActive: true,
      totalPurchase: "3,250,000",
      email:'mahdi-batart@gmail.com'
  },
  {
      id: 2,
      fullName: "نرگس محمدی",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=75&fit=crop",
      isActive: false,
      totalPurchase: "1,780,000",
      email:'mahdi-batart@gmail.com'
  },
  {
      id: 3,
      fullName: "امیرحسین کریمی",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=75&fit=crop",
      isActive: true,
      totalPurchase: "4,900,000",
      email:'mahdi-batart@gmail.com'
      
  },
  {
      id: 4,
      fullName: "فاطمه رضایی",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=75&fit=crop",
      isActive: true,
      totalPurchase: "2,150,000",
      email:'mahdi-batart@gmail.com'
  },
  {
      id: 5,
      fullName: "علی اکبری",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=75&fit=crop",
      isActive: false,
      totalPurchase: "850,000",
      email:'mahdi-batart@gmail.com'
  },
  {
      id: 6,
      fullName: "مهسا صادقی",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=75&fit=crop",
      isActive: true,
      totalPurchase: "5,430,000",
      email:'mahdi-batart@gmail.com'
  },
  {
      id: 7,
      fullName: "حسین طاهری",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=75&fit=crop",
      isActive: true,
      totalPurchase: "3,780,000",
      email:'mahdi-batart@gmail.com'
  },
  {
      id: 8,
      fullName: "زینب موسوی",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=75&fit=crop",
      isActive: false,
      totalPurchase: "1,230,000",
      email:'mahdi-batart@gmail.com'
  },
  {
      id: 9,
      fullName: "امیر نوروزی",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=75&fit=crop",
      isActive: true,
      totalPurchase: "6,150,000",
      email:'mahdi-batart@gmail.com'
  },
  {
      id: 10,
      fullName: "سارا احمدی",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=75&fit=crop",
      isActive: true,
      totalPurchase: "2,890,000",
      email:'mahdi-batart@gmail.com'
  }
];

const products = [
  {
    id: 1,
    name: "آیفون 14 پرو مکس",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9d3",
    price: "89,900,000",
    stock: true
  },
  {
    id: 2,
    name: "سامسونگ گلکسی S23",
    image: "https://images.unsplash.com/photo-1555617117-08c5f315ed6b",
    price: "75,000,000",
    stock: true
  },
  {
    id: 3,
    name: "شیائومی 13 پرو",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    price: "58,000,000",
    stock: true
  },
  {
    id: 4,
    name: "هواوی P60 پرو",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    price: "65,500,000",
    stock: false
  },
  {
    id: 5,
    name: "نوکیا G21",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    price: "12,500,000",
    stock: true
  },
  {
    id: 6,
    name: "سونی اکسپریا 1 III",
    image: "https://images.unsplash.com/photo-1512499617640-c2f999282f09",
    price: "54,000,000",
    stock: false
  },
  {
    id: 7,
    name: "اپل آیپد پرو 2023",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de169c6",
    price: "72,300,000",
    stock: true
  },
  {
    id: 8,
    name: "مایکروسافت سرفیس لپ تاپ 4",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    price: "82,000,000",
    stock: true
  },
  {
    id: 9,
    name: "مک بوک پرو 2023",
    image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    price: "95,500,000",
    stock: false
  },
  {
    id: 10,
    name: "سامسونگ گلکسی تب S9",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    price: "47,800,000",
    stock: true
  }
];


  
   
  









  



  export { xAxisData, users , userAction, usersPage , products};
  