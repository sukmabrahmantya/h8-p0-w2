var nama = 'Bram'
var peran = 'Presiden'

if (nama === '' && peran === ''){
    console.log('Nama Harus disi')
} else if (nama !== '' && peran === '') {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game !')
} else if (nama !== '' && peran === 'Ksatria') {
    console.log('Selamat datang didunia Proxytia, ' + nama)
    console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
} else if (nama !== '' && peran === 'Tabib'){
    console.log('Selamat datang didunia Proxytia, ' + nama)
    console.log('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka')
} else if (nama !== '' && peran === 'Penyihir'){
    console.log('Selamat datang didunia Proxytia, ' + nama)
    console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!' )
} else {
    console.log('Ehh maaf perannya kelupaan, belum diupdate')
}
