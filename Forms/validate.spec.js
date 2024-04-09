describe("authenticate", function() {
    beforeEach(function() {
        // Set up HTML elements for testing
        document.body.innerHTML =
            '<form name="signup">' +
            '<div id="errfname"></div>' +
            '<div id="errlname"></div>' +
            '<div id="errcontact"></div>' +
            '<div id="erremail"></div>' +
            '<div id="errpass"></div>' +
            '<input name="fname" />' +
            '<input name="lname" />' +
            '<input name="mobile" />' +
            '<input name="mail" />' +
            '<input name="pass" />' +
            '<input name="conpass" />' +
            '</form>';
    });

    it("should return true when all fields are valid", function() {
        // Set up valid input values
        document.forms['signup'].fname.value = "John";
        document.forms['signup'].lname.value = "Doe";
        document.forms['signup'].mobile.value = "1234567890";
        document.forms['signup'].mail.value = "john@example.com";
        document.forms['signup'].pass.value = "Password@123";
        document.forms['signup'].conpass.value = "Password@123";

        expect(authenticate()).toBe(true);
    });

    it("should return false when first name is empty", function() {
        document.forms['signup'].fname.value = "";
        expect(authenticate()).toBe(false);
        expect(document.getElementById("errfname").innerHTML).toContain("First name shouldn't empty");
    });

    it("should return false when first name is invalid", function() {
        document.forms['signup'].fname.value = "123";
        expect(authenticate()).toBe(false);
        expect(document.getElementById("errfname").innerHTML).toContain("First name invalid");
    });

    it("should return false when last name is empty", function() {
        document.forms['signup'].lname.value = "";
        expect(authenticate()).toBe(false);
        expect(document.getElementById("errlname").innerHTML).toContain("Last name shouldn't empty");
    });

    it("should return false when last name is invalid", function() {
        document.forms['signup'].lname.value = "123";
        expect(authenticate()).toBe(false);
        expect(document.getElementById("errlname").innerHTML).toContain("Last name invalid");
    });

    it("should return false when contact is empty", function() {
        document.forms['signup'].mobile.value = "";
        expect(authenticate()).toBe(false);
        expect(document.getElementById("errcontact").innerHTML).toContain("contact shouldn't empty");
    });

    it("should return false when contact is invalid", function() {
        document.forms['signup'].mobile.value = "abcdef";
        expect(authenticate()).toBe(false);
        expect(document.getElementById("errcontact").innerHTML).toContain("invalid contact");
    });

    it("should return false when email is empty", function() {
        document.forms['signup'].mail.value = "";
        expect(authenticate()).toBe(false);
        expect(document.getElementById("erremail").innerHTML).toContain("EMail shouldn't empty");
    });

    it("should return false when email is invalid", function() {
        document.forms['signup'].mail.value = "invalidemail";
        expect(authenticate()).toBe(false);
        expect(document.getElementById("erremail").innerHTML).toContain("Invalid email");
    });

    it("should return false when password is empty", function() {
        document.forms['signup'].pass.value = "";
        document.forms['signup'].conpass.value = "Password@123";
        expect(authenticate()).toBe(false);
        expect(document.getElementById("errpass").innerHTML).toContain("Password's empty");
    });

    it("should return false when passwords do not match", function() {
        document.forms['signup'].pass.value = "Password@123";
        document.forms['signup'].conpass.value = "DifferentPassword";
        expect(authenticate()).toBe(false);
        expect(document.getElementById("errpass").innerHTML).toContain("Password mismatch");
    });

    it("should return false when password is invalid", function() {
        document.forms['signup'].pass.value = "invalidpassword";
        document.forms['signup'].conpass.value = "invalidpassword";
        expect(authenticate()).toBe(false);
        expect(document.getElementById("errpass").innerHTML).toContain("Invalid password");
    });
});
