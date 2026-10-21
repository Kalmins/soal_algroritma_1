const prompt = require('prompt-sync')({sigint:true})

const tahun_ke_hari = 365
const bulan_ke_hari = 30

let x = Number(prompt('Hari : '))

let tahun = parseInt(x / tahun_ke_hari)
let sisa = parseInt(x % tahun_ke_hari)

let bulan = parseInt(sisa / bulan_ke_hari)
let hari = parseInt(sisa % bulan_ke_hari)

console.log(`
    ${tahun} tahun
    ${bulan} bulan
    ${hari} hari
    `)