dokumen . addEventListener ( 'alpine:init' ,  ( )  =>  {
    Alpen . data ( 'skillDisplay' ,  ( )  =>  ( {
        keterampilan : [ {
                'judul' : 'Photoshop' ,
                'persen' : '50' ,
            } ,
            {
                'title' : 'Mc.Excel' ,
                'persen' : '50' ,
            } ,
            {
                'judul' : 'Mc.Word' ,
                'persen' : '50' ,
            } ,
            {
                'judul' : 'Mc.Power Point' ,
                'persen' : '70' ,
            } ,
            {
                'judul' : 'HTML' ,
                'persen' : '50' ,
            } ,
            {
                'judul' : 'CSS' ,
                'persen' : '50' ,
            } ,
        ] ,
        keterampilan saat ini : {
            'judul' : 'Tidak ada' ,
            'persen' : '0' ,
        }
    } ) ) ;
} ) ;


const  scriptURL  =  'https://script.google.com/macros/s/AKfycbyzHXPpLgDaZqIb_4QrX_q9-aRn4Aygn2xMXn7wrs_GkigrnblDG3xVFYeCtmXHooJsxQ/exec' ;
          bentuk  const =  dokumen . formulir [ 'kirim-kontak' ]
         const  btnSend  =  dokumen . querySelector ( '.btn-send' ) ;
         const  btnLoading  =  dokumen . querySelector ( '.btn-loading' ) ;
         const  myAlert  =  dokumen . querySelector ( '.my-alert' ) ;

         bentuk . addEventListener ( 'kirim' ,  e  =>  {
             e . mencegahDefault ( )
             //kirim klik
             btnMemuat . daftar kelas . toggle ( 'tidak ada' ) ;
             btnKirim . daftar kelas . toggle ( 'tidak ada' ) ;
             ambil ( scriptURL , { 
                     metode : 'POST' ,
                     badan : FormData baru  ( formulir )
                 } )
                 . lalu ( respon  =>  {
                     //tampilkan tombol kirim
                     btnMemuat . daftar kelas . toggle ( 'tidak ada' ) ;
                     btnKirim . daftar kelas . toggle ( 'tidak ada' ) ;
                     //tampilkan peringatan
                     peringatan saya . daftar kelas . beralih ( 'tidak ada' )
                     //setel ulang formulir
                     bentuk . ulang ( ) ;
                     konsol . log ( 'Berhasil!' ,  tanggapan )
                 } )
                 . catch ( error  =>  console . error ( 'Error!' ,  error . message ) )
         } )