import Header from '../components/Header';
import RewardCard from '../components/Rcard';

const Dashboard = () => {
  const internData = {
    name: "Vamsi Bejjam",
    referralCode: "vamsi2025",
    donationsRaised: 5000,
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <Header name={internData.name} referralCode={internData.referralCode} />

      <div className="mb-6 text-lg">
        Total Donations Raised: <strong>₹{internData.donationsRaised}</strong>
      </div>

      <h2 className="text-xl font-semibold mb-2">🎁 Rewards</h2>
      <div className="grid gap-4">
        <RewardCard title="Sticker Pack" description="Unlocked at ₹1000" unlocked={true} />
        <RewardCard title="T-Shirt" description="Unlocked at ₹3000" unlocked={true} />
        <RewardCard title="Hoodie" description="Unlocked at ₹7000" unlocked={false} />
      </div>
    </div>
  );
};

export default Dashboard;
