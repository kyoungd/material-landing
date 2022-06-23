import React, {useState} from 'react';
import ModalVideo from 'react-modal-video'
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const Index = () => {
  const [isOpenMyStory, setOpenMyStory] = useState(false);
  const [isOpenHighQualityTrade, setOpenHighQualityTrade] = useState(false);
  const [isOpenTradeWithExperts, setOpenTradeWithExperts] = useState(false);
  const [isOpenCustomAI, setOpenCustomAI] = useState(false);
  const [isOpenLearning, setOpenLearning] = useState(false);
  const [isOpenLanding, setOpenLanding] = useState(false);

  return (
    <Layout>
      <section className="pt-20 md:pt-40">
        <ModalVideo
          channel="youtube"
          autoplay={false}
          isOpen={isOpenMyStory}
            videoId="_mhWwh1Y3vQ"
          onClose={() => setOpenMyStory(false)}
        />
        <ModalVideo
          channel="youtube"
          autoplay={false}
          isOpen={isOpenHighQualityTrade}
          videoId="LtSP17RCwlA"
          onClose={() => setOpenHighQualityTrade(false)}
        />
        <ModalVideo
          channel="youtube"
          autoplay={false}
          isOpen={isOpenTradeWithExperts}
          videoId="gehEckw_skE"
          onClose={() => setOpenTradeWithExperts(false)}
        />
        <ModalVideo
          channel="youtube"
          autoplay={false}
          isOpen={isOpenCustomAI}
          videoId="czf3qiHuxyY"
          onClose={() => setOpenCustomAI(false)}
        />
        <ModalVideo
          channel="youtube"
          autoplay={false}
          isOpen={isOpenLearning}
          videoId="XbUuApG4gEs"
          onClose={() => setOpenLearning(false)}
        />
        <ModalVideo
          channel="youtube"
          autoplay={false}
          isOpen={isOpenLanding}
          videoId="hcPNtFwSA0M"
          onClose={() => setOpenLanding(false)}
        />
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Next Generation Hybrid Trading
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Trade with focus, discipline and confidence.  Eliminate mistakes and maximize profits.
              Work less, earn more.
            </p>
            <p className="mt-8 md:mt-12">
              <Button size="lg" onClick={() => setOpenMyStory(true)}>My Story</Button>
            </p>
            <p className="mt-4 text-gray-600">Why TradeSimp?</p>
          </div>
          <div className="lg:w-1/2">
            <HeroImage />
          </div>
        </div>
      </section>
      <section id="features" className="py-20 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8" onClick={() => setOpenHighQualityTrade(true)}>
                <p className="font-semibold text-xl">High Quality Trades</p>
                <p className="mt-4">
                  Continuously search for quality trade opportunities in real time.  Using a
                  sophisticated AI, we can find the best trade opportunities for you.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8" onClick={() => setOpenTradeWithExperts(true)}>
                <p className="font-semibold text-xl">Trade With Experts</p>
                <p className="mt-4">
                  Trade with the best traders in the industry.  
                  We have a team of experts who can help you make the best decisions.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8" onClick={() => setOpenCustomAI(true)}>
                <p className="font-semibold text-xl">Customize AI</p>
                <p className="mt-4">
                  Take your trading to the next level.
                  Let us create a customize AI for you to use on your trade.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <SplitSection
        id="services"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">The Right Trade</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Trading is easy, but waiting for the right setup was difficult.  
              With scanning services, I got notifications too early, too late or on the wrong setup.  
              I missed good trades.  I got impatient and entered trades I should not have.
              That is why I created a custom AI to notify me only when an asset has the right setup.
              I get notification for an exact setup, and eliminate wasted time waiting and catch winners.
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Trade with experts
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              It is very difficult to master the complex variables of successful trade.
              There are only 1 or 2 techniques that an expert trader uses regularly.
              However, that is enough to retire.
              We bring you, experts and community together in a video conferencing.
              Every trade is reviewed by experts and discussed in the community.
              You can follow their suggestion or go your own way.
              It will help you reduce mistakes, be more disciplined and consistent.
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Discipline and consistent
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Our custom AI will alert you when the trade setup is complete.
              It tells you what pattern and what time frame.
              It allows you to focus on a single trade with a single technique.  
              There is no guessing here.  
              It eliminates distractions and makes it easier for you to be disciplined and consistent.
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <section id="stats" className="py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <LabelText className="text-gray-600">Our customers get results</LabelText>
          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="2.4" secondaryText="hours saved per day" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+1.7" secondaryText="More trades per day" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+14%" secondaryText="increase in success rate" />
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Types of Traders</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8" onClick={() => setOpenHighQualityTrade(true)}>
                <p className="font-semibold text-xl">Active Trades</p>
                <p className="mt-4">
                  As an active trader, you know the problem of finding quality trades.
                  Learn how we solved that problem and how that made us better.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8" onClick={() => setOpenLearning(true)}>
                <p className="font-semibold text-xl">New Traders</p>
                <p className="mt-4">
                  Trade with and learn from the best traders in the industry.
                  We have a team of experts who can help you make the best decisions.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8" onClick={() => setOpenLanding(true)}>
                <p className="font-semibold text-xl">Part Time Traders</p>
                <p className="mt-4">
                  Take your trading to the next level.
                  Let us create a customize AI for you to use on your trade.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
        <h3 className="text-5xl font-semibold">Ready to give it a trial run?</h3>
        <p className="mt-8 text-xl font-light">
          We offer a free 30 day free trial.  Just click here and login using your social media account.
        </p>
        <p className="mt-8">
          <Button size="xl" onClick={() => window.open('https://www.tradesimp.com', '_blank')}>Get Started Now</Button>
        </p>
      </section>
    </Layout>
  );
}

export default Index;
