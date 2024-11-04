function showDetails(student) {
    const details = {
        ferdi: {
            nim: '23034040',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        fiona: {
            nim: '23034041',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        fitri: {
            nim: '23034043',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        halifah: {
            nim: '23034044',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        lova: {
            nim: '23034047',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        maretha: {
            nim: '23034048',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        maya: {
            nim: '23034049',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        melda: {
            nim: '23034050',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        mike: {
            nim: '23034051',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        muhammad: {
            nim: '23034056',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        nisrina: {
            nim: '23034059',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        rahmah: {
            nim: '23034061',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        reny: {
            nim: '23034062',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        reva: {
            nim: '23034064',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        rezky: {
            nim: '23034066',
            email: 'rezkypratama12@gmail.com',
            telp: '082287206267',
            tanggalLahir: '01 desember 2004',
            moto: 'ngapainb banyak mikir, bikin goblok aja'
        },
        rien: {
            nim: '23034067',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        riren: {
            nim: '23034068',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        sandi: {
            nim: '23034070',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        sofi: {
            nim: '23034072',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        sofian: {
            nim: '23034073',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        widia: {
            nim: '23034075',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        },
        elida: {
            nim: '23034081',
            email: '-',
            telp: '-',
            tanggalLahir: '-',
            moto: '-'
        }
    };

    const content = details[student];
    const detailContent = `
        <h3>Detail Mahasiswa</h3>
        <p><strong>NIM:</strong> ${content.nim}</p>
        <p><strong>Email:</strong> ${content.email}</p>
        <p><strong>Telp:</strong> ${content.telp}</p>
        <p><strong>Tanggal Lahir:</strong> ${content.tanggalLahir}</p>
        <p><strong>Moto:</strong> "${content.moto}"</p>
    `;

    document.getElementById('detail-content').innerHTML = detailContent;
    document.getElementById('modal').style.display = 'block';
}

function hideDetails() {
    document.getElementById('modal').style.display = 'none';
}
