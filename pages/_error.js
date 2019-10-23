import React from "react";
import Layout from "../layouts/Layout";

function Error({ statusCode }) {
  return (
    <Layout>
      <p class="container">
        {statusCode
          ? `An error ${statusCode} occurred on server.`
          : `404. This place doesn't exist. Ḑ̸̨̢̨̧̡̨̧̛̻͚̰͈̣͚̘̗͙̤͖̼̺̖̬̥̫̼͉͉̯͎͙̗̰͇̭̯̲̖̠̥͈̼̬̙̥̥̼̭̪͖͓̫̝͖̱̘̜͈͍͚̻͍̣͍̣̙̦̘̹̼͍̤̰̲̺̰̙̮̪̟̟̗̱͇̞̱̬͔̲̥͕̣̝͉̰̫̳̻͓̬͎̦̙͔̬͛̾̀̑͌͐̇́͌́̒̂͐̈́͑̎̈̅̌͂̍̑͛̄̊̿̏̌̀̒͋̊̿͆͛͛͆̏̍̀̾̇̅͌͆̃̈́̑̄̇̓̓͗͂̒̀͛̓̏̈́͋͑̎̈́̌̑̔̈͗͋̀̚̚̕͘͜͝͝͝͠͝͝ͅƠ̴̢̢̢̯͕͖͙͕̦̬̱̹̼̭͕̮͕͖̻̹̹̝̙̼͙̰̟̪̯̍́̍̇̄̈́̊̈́͋́̾̍͗̐̉͊̌̾̽͑͋́̈͌̿̎̿̂͊̕̕͝ͅͅ ̶̢̨̢̨̢̧̨̡̧̧̧̨̡̧̧̡̧̨̨̛̛̟̙̘̜̦̤̮̪̣͉͓͔̫̼̹̭͇̤̞̜̬̰̲̻̺̳̟̰͕̺̙̗̻͉̣̩̳͚̲͚̝̠̟͍̙͇͚͖̤̖̻̥̳͎̠̮̖͉̩̬̹̳͉̱̩̟͖̳͍̻͔̝̼̖̼̰̠̞̣̝̞̯̗̣̟̼̳̻̠̠̭̥̤̳̹͈̯̻̝̫̲͔͕͓̮̺̫̙̱̣͙̥̦͚͇͍̪͚̲̭̯̭̘̦̳̩̦͉̻͈̝̣͎̙̫̳͔̻͖̞̣͈̬̬̥̳̫͔͓͎̳̪̖̜̼̻͓̹̺̤̦͉̇̓̏̐͑͛̅͊̈̆̐̀͒̈́̋̎͆̍̈́̑͑͛̒̾̃̑̈́̏̇́͗͒͂̂̚͜͜͜͜͜͝͝͝ͅͅͅͅͅͅY̶̧̢̡̛̛̛͎̻͕̲̟̘̫̙̖̫͖͚͔̪̗̘͎̤̼͉̫̟͙͚̙̮̰̝̦̝͚̙̭͎͎͚̻̫̤̗̖̣̱̹̰̺͙͐̄̈́̈́̒̈́͂̈́͒̑̄́̈́̔̊̃̃̾̉̈́͛͂̑͋̽́͂̄̈́̄̉̎̓́̀̀̄̾́́̒̓̽̑̏́́͋̀͊̽̐̆̽̓́̊͛͑̎̊͂͋̍̑̊̈́̒̃̓̅͑̈͒̎́̓̂̍̓̓̋̇̾̅̄͊̈́̀̀̀̐̎͂́͂͘͘͘̕̚̕͘̕͘͘̕͜͜͝͝͝ͅǪ̸̢̡̨̡̢̨̡̢̭̤͍̩͙̰̣͈̜͙̩̦͎̙̻̰̘͎̭̦̰̱̙̦̩̻̻̫͚͙͚͓̘͓̩̻̜̜̗͕̪̥͙̲̲̪̖͓̝̰̻̻̪͎̩̳͎̲͎̳̙̖̼̼̯̠̞͔͍̩̤̙͖̤͕̻̣͖͈̖̙͓͇̝̻̘͔̗͇̲̥͓͍͇̥̼͉̟̹̳͉̭̹͕̦̰̈́͜͝ͅƯ̶̢̧̡̢̡̢̧̢̛̰̟̖͇̫̤̦͈̩̹͎̗͚̹͚͍͉̞͇͎̳̘̙̰͚̼̥̰͖̱̪̪͓̮̫̙͚͚͈̦͎̖̪͎̮̙̹̰̪̖͎̰̘̱̹̖͙͍͙̙͕͔͔̰͉̘͇͈̜͕͔̫͈̠̲̠͌́̓̏̏̓͛̂̌͂̃̂̒̾̽̔̒̈́͂͑̔̏̅̐̔́̎͗̋̃̌͌̑́̄̈́̈́̒̊̇̑̔̏̓̄̾̀̓͒̊̉̇̋͑̂̈̊͐́̀̏̑͆̔̉͌͂͛̓̍̐̐̄̈́̓̀̀̍̐̈́̂̎̏̽̽́̐̈́̑͌̀̄̋̑͑͐͂͛̈͋̑̀̎͑̈́̈́̀̊̿̏̓̌̾̾̎̂̑́̈́́̂͂̾̐̓̀̂̌͐̈́̓̂̀̅̈́͗̆́͆̌́̏̉͂̓̌̽̔͆̿̆̉̄͒͛͘͘̚̚̚͘̕̕͘̕͜͜͜͜͝͠͠͠͝͝͠͝͠͝͝͝ͅͅ?̸̡̢̨̢̢̢̧̡̧̨̢̡̛̛̛̛̛͇̫͚̱͇̼͓͈͓̳̖͎͇̤͎̜̮̖͎͖̫̣̞͇̯̠̗̦̞̼̣̪̮̖͍͈̠̪̜͈̗͔̭̬̖̩͇̤̺͇͔͓̮͕͈̩̮͖͕̺̹͖͇̖̮̙̪̰̯̳͈̞͎͕̲̭͕̪̲̩͓̭͍̹̫͖̫͙̖̜̭̪͎̥͎̤̟̪͖͓̺̳͍̗̟̤͖̞̘̜̗̝͍̘̪̦͙̟͈̙͓͖̦̠̤͕̰͚̰̥̤͕̖͎̞̭̰̰̞̜͇̖̮͙̮̭̠͉͍̭̹̫̩̐͆̇̎͌̈̏̄̃͑͒̅̒̾̌̿̍̄̈͌̐̄͛͐͗̔̎͒͒̾͋͒̌̑̌̿͒̆͂̀͑̋̄̽͗́̐̅̋͒̈̌͐͋̀͌̑͐͑̄͊̐̿̍͂̃͗̍̔̽̊̈́̈́͌̂̀͌́͋͐͋̋̄͆̑̒́̌͗̇̀̌̔̔̓̏̌̽͐̉̇̍́̐̒̍̓̒͂̀̅̆̔͐̍̑̌̐̒́̏͋̎̐̈͋̑̍̊͋́͒̂́̾̿̕̕̕̕̚͘̕͘̚͜͜͜͜͝͝͠͠͠͝͝͝͝͠͠͝ͅͅͅͅͅ`}
      </p>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;