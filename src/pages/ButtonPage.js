import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-5">
          <GoBell />
          Click here!
        </Button>
      </div>
      <div>
        <Button secoundary outline>
          <GoCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoDatabase />
          See offer!!
        </Button>
      </div>
      <div>
        <Button warning>Ad bloker</Button>
      </div>
      <div>
        <Button danger outline>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
