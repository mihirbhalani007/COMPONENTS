import Accordion from "../components/Accordion";

function AccodionPage() {
  const items = [
    {
      id: "sfa6s",
      label: "100,000 views - how much is it?",
      content:
        "The number of views equals the number of times the app loads on your website. As usual, 100,000 views approximately equals 100,000 of visits to your site per month. But it still depends on each specific case and the numbers may differ. More details about views are here.",
    },

    {
      id: "adf45",
      label: "Do you offer any discounts??",
      content:
        "Yes! We offer 17% discount for payment per year. There may be other temporary discounts, check for this inside the service.",
    },

    {
      id: "asdf245",
      label: "Can I change my plan later on?",
      content:
        "Absolutely! You can upgrade or downgrade your plan anytime. The money paid for the previous subscription will be recalculated to the new plan.",
    },
  ];
  
  return (
  <div>
    <Accordion itmes={items} />
  </div>
  )
}

export default AccodionPage;
