export const getInternData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
     
     
     resolve({
        name: "Vamsi Bejjam",
        referralCode: "vamsi2025",
        donationsRaised: 5000,
      });
    }, 500);
  });
};
