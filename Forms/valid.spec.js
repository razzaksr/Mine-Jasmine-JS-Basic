describe('authenticate', () => {
    let isValid;
    let ferr, lerr, cerr, merr, perr;
    let fname, lname, mobile, mail, pass, conpass;

    beforeEach(() => {
        isValid = true;
        ferr = document.createElement('span');
        lerr = document.createElement('span');
        cerr = document.createElement('span');
        merr = document.createElement('span');
        perr = document.createElement('span');
        document.body.appendChild(ferr);
        document.body.appendChild(lerr);
        document.body.appendChild(cerr);
        document.body.appendChild(merr);
        document.body.appendChild(perr);
        fname = document.createElement('input');
        lname = document.createElement('input');
        mobile = document.createElement('input');
        mail = document.createElement('input');
        pass = document.createElement('input');
        conpass = document.createElement('input');
        document.forms['signup'] = {
            fname: fname,
            lname: lname,
            mobile: mobile,
            mail: mail,
            pass: pass,
            conpass: conpass
        };
    });

    it('should validate first name', () => {
        fname.value = '';
        authenticate();
        expect(ferr.innerHTML).toBe('First name shouldn\'t be empty');
        expect(isValid).toBe(false);

        fname.value = '123'; // Invalid name
        authenticate();
        expect(ferr.innerHTML).toBe('First name invalid');
        expect(isValid).toBe(false);

        fname.value = 'John'; // Valid name
        authenticate();
        expect(ferr.innerHTML).toBe('');
        expect(isValid).toBe(true);
    });

    // Similar tests for last name, contact, email, and password

    it('should check for password mismatch', () => {
        // pass.value = 'password1';
        // conpass.value = 'password1'; // Mismatch
        // authenticate();
        // expect(perr.innerHTML).toBe('Password mismatch');
        // expect(isValid).toBe(false);

        pass.value = 'password';
        conpass.value = 'password'; // Match
        authenticate();
        expect(perr.innerHTML).toBe('');
        expect(isValid).toBe(true);
    });
});
