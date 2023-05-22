const districtsUP = [
{   id: 1,
    district: 'Agra',
    cases: 25,
},
{   id: 2,
    district: 'Aligarh',
    cases: 12,
},
{   id: 3,
    district: 'PrayagRaj',
    cases: 23,
},
{   id: 4,
    district: 'Ambedkar Nagar',
    cases: 10,
},
{   id: 5,
    district: 'Amroha',
    cases: 18,
},
{   id: 6,
    district: 'Auraiya',
    cases: 31,
},
{   id: 7,
    district: 'Azamgarh',
    cases: 14,
},
{   id: 8,
    district: 'Badaun',
    cases: 5,
},
{   id: 9,
    district: 'Bahraich',
    cases: 19,
},
{   id: 10,
    district: 'Ballia',
    cases: 23,
},
{   id: 11,  
    district: 'Balrampur',
    cases: 53,
},
{   id: 12,
    district: 'Banda District',
    cases: 40,
},
{   id: 13,
    district: 'Barabanki',
    cases: 17,
},
{   id: 14,
    district: 'Bareilly',
    cases: 33,
},
{   id: 15,
    district: 'Basti',
    cases: 10,
},
{   id: 16,
    district: 'Bijnor',
    cases: 9,
},
{   id: 17,
    district: 'Bulandshahr',
    cases: 77,
},
{   id: 18,
    district: 'Chandauli(Varanasi Dehat)',
    cases: 19,
},
{   id: 19,
    district: 'Chitrakoot',
    cases: 56,
},
{   id: 20,
    district: 'Deoria',
    cases: 43,
},
{   id: 21,
    district: 'Etah',
    cases: 11,
},
{   id: 22,
    district: 'Etawah',
    cases: 30,
},
{   id: 23,
    district: 'Faizabad',
    cases: 10,
},
{   id: 24,
    district: 'Farrukhabad',
    cases: 19,
},
{   id: 25,
    district: 'Fatehpur',
    cases: 22,
},
// {   id:26,
//     district: 'Firozabad',
//     cases: 27,
// },
// {   id: 27,
//     district: 'Gautam Buddha Nagar',
//     cases: 36,
// },
// {   id:28,
//     district: 'Ghaziabad',
//     cases: 18,
// },
// {   id:29,
//     district: 'Ghazipur',
//     cases: 19,
// },
// {   id:30,
//     district: 'Gonda',
//     cases: 49,
// },
// {   id:31,
//     district: 'Gorakhpur',
//     cases: 25,
// },
// {   id:32,
//     district: 'Hamirpur',
//     cases: 28,
// },
// {   id:33,
//     district: 'Hapur District',
//     cases: 17,
// },
// {   id:34,
//     district: 'Hardoi',
//     cases: 46,
// },
// {   id:35,
//     district: 'Hathras',
//     cases: 76,
// },
// {   id:36,
//     district: 'Jaunpur District',
//     cases: 13,
// },
// {   id:37,
//     district: 'Jhansi',
//     cases: 40,
// },
// {   id:38,
//     district: 'Kannauj',
//     cases: 15,
// },
// {   id:39,
//     district: 'Kanpur Dehat',
//     cases: 39,
// },
// {   id:40,
//     district: 'Kanpur Nagar',
//     cases: 28,
// },
// {   id:41,
//     district: 'Kasganj',
//     cases: 27,
// },
// {   id:42,
//     district: 'Kaushambi',
//     cases: 50,
// },
// {   id:43,
//     district: 'Kushinagar',
//     cases: 36,
// },
// {   id:44,
//     district: 'Lakhimpur Kheri',
//     cases: 10,
// },
// {   id:45,
//     district: 'Lalitpur',
//     cases: 19,
// },
// {   id:46,
//     district: 'Lucknow',
//     cases: 29,
// },
// {   id:47,
//     district: 'Maharajganj',
//     cases: 37,
// },
// {   id: 48,
//     district: 'Mahoba',
//     cases: 6,
// },
// {   id: 49,
//     district: 'Mainpuri',
//     cases: 34,
// },
// {   id: 50,
//     district: 'Mathura',
//     cases: 32,
// },
// {   id: 51,
//     district: 'Mau',
//     cases: 26,
// },
// {   id: 52,
//     district: 'Meerut',
//     cases: 15,
// },
// {   id: 53,
//     district: 'Mirzapur',
//     cases: 19,
// },
// {   id: 54,
//     district: 'Moradabad',
//     cases: 27,
// },
// {   id: 55,
//     district: 'Muzaffarnagar',
//     cases: 33,
// },
// {   id: 56,
//     district: 'Pilibhit',
//     cases: 29,
// },
// {   id: 57,
//     district: 'Pratapgarh',
//     cases: 16,
// },
// {   id: 58,
//     district: 'Rae Bareli',
//     cases: 30,
// },
// {   id: 59,
//     district: 'Rampur',
//     cases: 22,
// },
// {   id: 60,
//     district: 'Saharanpur',
//     cases: 34,
// },
// {   id: 61,
//     district: 'Sant Kabir Nagar',
//     cases: 11,
// },
// {   id: 62,
//     district: 'Sant Ravidas Nagar',
//     cases: 63,
// },
// {   id: 63,
//     district: 'Sambhal',
//     cases: 38,
// },
// {   id: 64,
//     district: 'Shahjahanpur',
//     cases: 28,
// },
// {   id: 65,
//     district: 'Shamli',
//     cases: 16,
// },
// {   id: 66,
//     district: 'Shravasti',
//     cases: 14,
// },
// {   id: 67,
//     district: 'Siddharthnagar',
//     cases: 8,
// },
// {   id: 68,
//     district: 'Sitapur',
//     cases: 40,
// },
// {   id: 69,
//     district: 'Sonbhadra',
//     cases: 26,
// },
// {   id: 70,
//     district: 'Sultanpur',
//     cases: 73,
// },
// {   id: 71,
//     district: 'Unnao',
//     cases: 29,
// },
// {   id: 72,
//     district: 'Varanasi (Kashi)',
//     cases: 28,
// },
// {   id: 73,
//     district: 'Allahabad',
//     cases: 55,
// },
// {   id: 74,
//     district: 'Amethi',
//     cases: 68,
// },
// {   id: 75,
//     district: 'Bagpat',
//     cases: 25,
// }
];

export default districtsUP;