// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
//Monica's Favorite Color
let favoriteColorMonica = new Set();
favoriteColorMonica.add("Yellow");
favoriteColorMonica.add("Pink");
favoriteColorMonica.add("White");
favoriteColorMonica.add("Purple");
//Wendy's Favorite Color
let favoriteColorWendy = new Set();
favoriteColorWendy.add("Blue");
favoriteColorWendy.add("Black");
favoriteColorWendy.add("Grey");
//isHavePet
let isHavePet = new Map();
isHavePet.set('Monica','Yes');
isHavePet.set('Wendy','No');

//Monica's Education
 const eduMonica = {
     name: "SD 01",
     city: "Jakarta",
     graduate: "2016"
}
 const eduMonica2 = {
    name: "SMP 02",
    city: "Jakarta",
    graduate: "2019"
} 
const eduMonica3 = {
    name: "SMA 03",
    city: "Tangerang"
}
 
 const educationMonica = [];
 educationMonica.push(eduMonica);
 educationMonica.push(eduMonica2);
 educationMonica.push(eduMonica3);

// Wendy's Education
const eduWendy = {
    name: "SD 02",
    city: "Jakarta",
    graduate: "2010"
}
const eduWendy2 = {
   name: "SMP 03",
   city: "Bogor",
   graduate: "2013"
} 
const eduWendy3 = {
   name: "SMA 01",
   city: "Surabaya",
   graduate: "2016"
}
const eduWendy4 = {
    name: "Universitas Maju",
    city: "Tangerang"
 }

const educationWendy = [];
educationWendy.push(eduWendy);
educationWendy.push(eduWendy2);
educationWendy.push(eduWendy3);
educationWendy.push(eduWendy4);

//Monica's Favorite Restaurant
let favoriteRestaurantMonica = new Set();
favoriteRestaurantMonica.add("Bento");
favoriteRestaurantMonica.add("Sushi");
favoriteRestaurantMonica.add("Pancake");
favoriteRestaurantMonica.add("Eggy");
favoriteRestaurantMonica.add("Tempura");
favoriteRestaurantMonica.add("Bento");
favoriteRestaurantMonica.add("Eggy");
favoriteRestaurantMonica.add("Padang");
favoriteRestaurantMonica.add("tteok");
favoriteRestaurantMonica.add("Sushi");
favoriteRestaurantMonica.add("Sushi");

//Wendy's Favorite Restaurant
let favoriteRestaurantWendy = new Set();
favoriteRestaurantWendy.add("Tempura");
favoriteRestaurantWendy.add("Bento");
favoriteRestaurantWendy.add("Sushi");
favoriteRestaurantWendy.add("Pancake");
favoriteRestaurantWendy.add("Padang");
favoriteRestaurantWendy.add("Katsu");
favoriteRestaurantWendy.add("Geprek");
favoriteRestaurantWendy.add("Pancake");
favoriteRestaurantWendy.add("Eggy");

//User Monica, object education pakai stringify sehingga berubah jadi string
const firstUser = {
    name: "Monica",
    age:"17",
    email:"monica@dingdong.com",
    favoriteColor: favoriteColorMonica,
    isHavePet: isHavePet.get('Monica'),
    education: JSON.stringify(educationMonica),
    favoriteRestaurant: favoriteRestaurantMonica
};

//User Wendy, value pada object education berbentuk object
const secondUser = {
    name: "Wendy",
    age: "23",
    email:"wendy@dingdong.com",
    favoriteColor: favoriteColorWendy,
    isHavePet: isHavePet.get('Wendy'),
    education: educationWendy,    
    favoriteRestaurant: favoriteRestaurantWendy,
    
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};