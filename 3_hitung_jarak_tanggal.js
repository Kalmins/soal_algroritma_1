const prompt = require('prompt-sync')({sigint:true})

const TAHUN_KE_HARI = 365
const BULAN_KE_HARI = 30

console.log('Tanggal Pertama')
let h1 = Number(prompt('Hari : '))
let b1 = Number(prompt('Bulan : '))
let t1 = Number(prompt('Tahun : '))

console.log('Tanggal Kedua')
let h2 = Number(prompt('Hari : '))
let b2 = Number(prompt('Bulan : '))
let t2 = Number(prompt('Tahun : '))

let total1 = (t1 * TAHUN_KE_HARI) + (b1 * BULAN_KE_HARI) + h1
let total2 = (t2 * TAHUN_KE_HARI) + (b2 * BULAN_KE_HARI) + h2

let x = Math.abs(total2 - total1)

let tahun = parseInt(x / TAHUN_KE_HARI)
let sisa = parseInt(x % TAHUN_KE_HARI)

let bulan = parseInt(sisa / BULAN_KE_HARI)
let hari = parseInt(sisa % BULAN_KE_HARI)

console.log(`${hari} hari ${bulan} bulan ${tahun} tahun`)
