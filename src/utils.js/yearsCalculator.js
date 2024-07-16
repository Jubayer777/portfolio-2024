export const calculateYears = (startDate) => {
    const today = new Date();
    const birthDate = new Date(startDate);
    let years = today.getFullYear() - birthDate.getFullYear();
    if (new Date(today.setFullYear(0)) < new Date(birthDate.setFullYear(0))) {
        years--;
    }
    return years;
};
