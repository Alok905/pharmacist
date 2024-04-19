export function validateEmail(email) {
    const regex = /[A - Za - z0 - 9\._ % +\-] + @[A - Za - z0 - 9\.\-] +\.[A-Za - z]{ 2,}/gm

    return regex.test(email)
}