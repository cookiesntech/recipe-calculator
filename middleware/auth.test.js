const { ensureAuth, ensureGuest } = require('./auth');

describe("ensureAuth", () => {
    it("should call next if the user is authenticated", () => {
        const req = { isAuthenticated: jest.fn().mockReturnValue(true)};
        const res = {};
        const next = jest.fn();

        ensureAuth(req, res, next);

        expect(next).toHaveBeenCalledTimes(1);
    });
    
    it("should redirect to Home if the user is NOT authenticated", () => {
        const req = { isAuthenticated: jest.fn().mockReturnValue(false)};
        const res = {redirect: jest.fn()};
        const next = jest.fn();

        ensureAuth(req, res, next);

        expect(next).not.toHaveBeenCalled();
        expect(res.redirect).toHaveBeenCalledWith('/');
    });
});

describe("ensureGuest", () => {
    it("should call next if the user is NOT authenticated", () => {
        const req = { isAuthenticated: jest.fn().mockReturnValue(false)};
        const res = {};
        const next = jest.fn();

        ensureGuest(req, res, next);
        
        expect(next).toHaveBeenCalledTimes(1);
    });

    it("should redirect to /ingredients if the user is authenticated", () => {
        const req = { isAuthenticated: jest.fn().mockReturnValue(true)};
        const res = {redirect: jest.fn()};
        const next = jest.fn();

        ensureGuest(req, res, next);

        expect(next).not.toHaveBeenCalled();
        expect(res.redirect).toHaveBeenCalledWith("/ingredients");
    });
});