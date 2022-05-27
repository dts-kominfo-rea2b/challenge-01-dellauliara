// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca


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

// fav resto
const favoriteRestaurantMonica = Array.from(
    new Set([
      "Bento",
      "Sushi",
      "Pancake",
      "Eggy",
      "Tempura",
      "Bento",
      "Eggy",
      "Padang",
      "Tteok",
      "Sushi",
      "Sushi"
    ])
)
  


const favoriteRestaurantWendy = Array.from(
    new Set([
        "Tempura",
        "Bento",
        "Sushi",
        "Pancake",
        "Padang",
        "Katsu",
        "Geprek",
        "Pancake",
        "Eggy"
    ])
)


const firstUser = {
    name: "Monica",
    gender:"Female",
    age:"17",
    email:"monica@dingdong.com",
    favoriteColor: [
        'Yellow', 'Pink', 'White', 'Purple'
    ],
    isHavePet: isHavePet.get('Monica'),
    education: educationMonica,
    favoriteRestaurant: favoriteRestaurantMonica
};

const secondUser = {
    name: "Wendy",
    gender:"Male",
    age: "23",
    email:"wendy@dingdong.com",
    favoriteColor: [
        'Blue', 'Black', 'Grey'
    ],
    isHavePet: isHavePet.get('Wendy'),
    education: educationWendy,    
    favoriteRestaurant: favoriteRestaurantWendy    
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