import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'osmosis',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://osmosis.zone/',
  prettyName: 'Osmosis',
  chainType: 'cosmos',
  chainId: 'osmosis-1',
  bech32Prefix: 'osmo',
  daemonName: 'osmosisd',
  nodeHome: '$HOME/.osmosisd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: 'uosmo',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      },
      {
        denom: 'factory/osmo10c4y9csfs8q7mtvfg4p9gd8d0acx0hpc2mte9xqzthd7rd3348tsfhaesm/sICP-native-ICP'
      },
      {
        denom: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID'
      },
      {
        denom: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB'
      },
      {
        denom: 'factory/osmo1em6xs47hd82806f5cxgyufguxrrc7l0aqx7nzzptjuqgswczk8csavdxek/alloyed/allUSDT'
      },
      {
        denom: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA'
      },
      {
        denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo'
      },
      {
        denom: 'factory/osmo1k6c8jln7ejuqwtqmay3yvzrg3kueaczl96pk067ldg8u835w0yhsw27twm/alloyed/allETH'
      },
      {
        denom: 'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn'
      },
      {
        denom: 'factory/osmo1n3n75av8awcnw4jl62n3l48e6e4sxqmaf97w5ua6ddu4s475q5qq9udvx4/alloyed/allSOL'
      },
      {
        denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/cac'
      },
      {
        denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/pbb'
      },
      {
        denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos'
      },
      {
        denom: 'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo'
      },
      {
        denom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt'
      },
      {
        denom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn'
      },
      {
        denom: 'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx'
      },
      {
        denom: 'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc'
      },
      {
        denom: 'factory/osmo1z6r6qdknhgsc0zeracktgpcxf43j6sekq07nw8sxduc9lg0qjjlqfu25e3/alloyed/allBTC'
      },
      {
        denom: 'ibc/0233A3F2541FD43DBCA569B27AF886E97F5C03FC0305E4A8A3FAC6AC26249C7A'
      },
      {
        denom: 'ibc/094FB70C3006906F67F5D674073D2DAFAFB41537E7033098F5C752F211E7B6C2'
      },
      {
        denom: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A'
      },
      {
        denom: 'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7'
      },
      {
        denom: 'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0'
      },
      {
        denom: 'ibc/0FA9232B262B89E77D1335D54FB1E1F506A92A7E4B51524B400DC69C68D28372'
      },
      {
        denom: 'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6'
      },
      {
        denom: 'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682'
      },
      {
        denom: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4'
      },
      {
        denom: 'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D'
      },
      {
        denom: 'ibc/164807F6226F91990F358C6467EEE8B162E437BDCD3DADEC3F0CE20693720795'
      },
      {
        denom: 'ibc/178248C262DE2E141EE6287EE7AB0854F05F25B0A3F40C4B912FA1C7E51F466E'
      },
      {
        denom: 'ibc/1AEF145C549D4F9847C79E49710B198C294C7F4A107F4610DEE8E725FFC4B378'
      },
      {
        denom: 'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477'
      },
      {
        denom: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59'
      },
      {
        denom: 'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076'
      },
      {
        denom: 'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C'
      },
      {
        denom: 'ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA'
      },
      {
        denom: 'ibc/23104D411A6EB6031FA92FB75F227422B84989969E91DCAD56A535DD7FF0A373'
      },
      {
        denom: 'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99'
      },
      {
        denom: 'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85'
      },
      {
        denom: 'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E'
      },
      {
        denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
      },
      {
        denom: 'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A'
      },
      {
        denom: 'ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9'
      },
      {
        denom: 'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604'
      },
      {
        denom: 'ibc/2E3784772E70F7B3A638BA88F65C8BE125D3CDB6E28C6AABC51098C94F5E16A5'
      },
      {
        denom: 'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3'
      },
      {
        denom: 'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D'
      },
      {
        denom: 'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593'
      },
      {
        denom: 'ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539'
      },
      {
        denom: 'ibc/3B95D63B520C283BCA86F8CD426D57584039463FD684A5CBA31D2780B86A1995'
      },
      {
        denom: 'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB'
      },
      {
        denom: 'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7'
      },
      {
        denom: 'ibc/4017C65CEA338196ECCEC3FE3FE8258F23D1DE88F1D95750CC912C7A1C1016FF'
      },
      {
        denom: 'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7'
      },
      {
        denom: 'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC'
      },
      {
        denom: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED'
      },
      {
        denom: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4'
      },
      {
        denom: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB'
      },
      {
        denom: 'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452'
      },
      {
        denom: 'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20'
      },
      {
        denom: 'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B'
      },
      {
        denom: 'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC'
      },
      {
        denom: 'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E'
      },
      {
        denom: 'ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516'
      },
      {
        denom: 'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580'
      },
      {
        denom: 'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205'
      },
      {
        denom: 'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F'
      },
      {
        denom: 'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447'
      },
      {
        denom: 'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4'
      },
      {
        denom: 'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13'
      },
      {
        denom: 'ibc/62118FB4D5FEDD5D2B18DC93648A745CD5E5B01D420E9B7A5FED5381CB13A7E8'
      },
      {
        denom: 'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D'
      },
      {
        denom: 'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D'
      },
      {
        denom: 'ibc/63A7CA0B6838AD8CAD6B5103998FF9B9B6A6F06FBB9638BFF51E63E0142339F3'
      },
      {
        denom: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273'
      },
      {
        denom: 'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5'
      },
      {
        denom: 'ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A'
      },
      {
        denom: 'ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C'
      },
      {
        denom: 'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C'
      },
      {
        denom: 'ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA'
      },
      {
        denom: 'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A'
      },
      {
        denom: 'ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244'
      },
      {
        denom: 'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373'
      },
      {
        denom: 'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805'
      },
      {
        denom: 'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D'
      },
      {
        denom: 'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F'
      },
      {
        denom: 'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9'
      },
      {
        denom: 'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA'
      },
      {
        denom: 'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0'
      },
      {
        denom: 'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8'
      },
      {
        denom: 'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3'
      },
      {
        denom: 'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961'
      },
      {
        denom: 'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB'
      },
      {
        denom: 'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4'
      },
      {
        denom: 'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB'
      },
      {
        denom: 'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C'
      },
      {
        denom: 'ibc/884EBC228DFCE8F1304D917A712AA9611427A6C1ECC3179B2E91D7468FB091A2'
      },
      {
        denom: 'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2'
      },
      {
        denom: 'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA'
      },
      {
        denom: 'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3'
      },
      {
        denom: 'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E'
      },
      {
        denom: 'ibc/92AE2F53284505223A1BB80D132F859A00E190C6A738772F0B3EF65E20BA484F'
      },
      {
        denom: 'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5'
      },
      {
        denom: 'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F'
      },
      {
        denom: 'ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8'
      },
      {
        denom: 'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84'
      },
      {
        denom: 'ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C'
      },
      {
        denom: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4'
      },
      {
        denom: 'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525'
      },
      {
        denom: 'ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110'
      },
      {
        denom: 'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A'
      },
      {
        denom: 'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E'
      },
      {
        denom: 'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84'
      },
      {
        denom: 'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E'
      },
      {
        denom: 'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293'
      },
      {
        denom: 'ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA'
      },
      {
        denom: 'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9'
      },
      {
        denom: 'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68'
      },
      {
        denom: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4'
      },
      {
        denom: 'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB'
      },
      {
        denom: 'ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3'
      },
      {
        denom: 'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF'
      },
      {
        denom: 'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E'
      },
      {
        denom: 'ibc/B8C608CEE08C4F30A15A7955306F2EDAF4A02BB191CABC4185C1A57FD978DA1B'
      },
      {
        denom: 'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163'
      },
      {
        denom: 'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228'
      },
      {
        denom: 'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE'
      },
      {
        denom: 'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06'
      },
      {
        denom: 'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC'
      },
      {
        denom: 'ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD'
      },
      {
        denom: 'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B'
      },
      {
        denom: 'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C'
      },
      {
        denom: 'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88'
      },
      {
        denom: 'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC'
      },
      {
        denom: 'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2'
      },
      {
        denom: 'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F'
      },
      {
        denom: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F'
      },
      {
        denom: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC'
      },
      {
        denom: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858'
      },
      {
        denom: 'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049'
      },
      {
        denom: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877'
      },
      {
        denom: 'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5'
      },
      {
        denom: 'ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38'
      },
      {
        denom: 'ibc/E43ABCC7E80E99E4E6E1226AE5695DDE0F83CB5C257CD04D47C36B8B90C1C839'
      },
      {
        denom: 'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B'
      },
      {
        denom: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1'
      },
      {
        denom: 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C'
      },
      {
        denom: 'ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7'
      },
      {
        denom: 'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD'
      },
      {
        denom: 'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44'
      },
      {
        denom: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5'
      },
      {
        denom: 'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0'
      },
      {
        denom: 'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C'
      },
      {
        denom: 'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC'
      },
      {
        denom: 'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D'
      },
      {
        denom: 'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4'
      },
      {
        denom: 'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65'
      },
      {
        denom: 'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B'
      },
      {
        denom: 'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D'
      },
      {
        denom: 'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE'
      },
      {
        denom: 'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4'
      },
      {
        denom: 'uion'
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'uosmo'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/osmosis-labs/osmosis',
    genesis: {
      name: 'v3',
      genesisUrl: 'https://github.com/osmosis-labs/networks/raw/main/osmosis-1/genesis.json'
    },
    recommendedVersion: '29.0.0',
    compatibleVersions: ['29.0.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38.17',
      repo: 'https://github.com/osmosis-labs/cometbft',
      tag: 'v0.38.17-v28-osmo-1'
    },
    cosmwasm: {
      version: '0.53.2',
      repo: 'https://github.com/CosmWasm/wasmd',
      tag: 'v0.53.2',
      enabled: true
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.11',
      repo: 'https://github.com/osmosis-labs/cosmos-sdk',
      tag: 'v0.50.11-v28-osmo-1'
    },
    ibc: {
      type: 'go',
      version: '8.7.0',
      repo: 'https://github.com/cosmos/ibc-go',
      tag: 'v8.7.0',
      icsEnabled: ['ics20-1']
    },
    language: {
      type: 'go',
      version: '1.22.11'
    },
    binaries: {
      "linux/amd64": 'https://github.com/osmosis-labs/osmosis/releases/download/v29.0.0/osmosisd-29.0.0-linux-amd64?checksum=6999331507e5119228456a64f733eb1d945f5392ffcfd4673bdad25886b19a7e',
      "linux/arm64": 'https://github.com/osmosis-labs/osmosis/releases/download/v29.0.0/osmosisd-29.0.0-linux-arm64?checksum=079d836d1bf009aab09149eb79d3c187980c5116b8319e09c66a8cae7fa0704c'
    }
  },
  images: [{
      imageSync: {
        chainName: 'osmosis',
        baseDenom: 'uosmo'
      },
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
      theme: {
        primaryColorHex: '#760dbb'
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
  },
  description: 'Osmosis (OSMO) is the premier DEX and cross-chain DeFi hub within the Cosmos ecosystem, a network of over 50 sovereign, interoperable blockchains seamlessly connected through the Inter-Blockchain Communication Protocol (IBC). Pioneering in its approach, Osmosis offers a dynamic trading and liquidity provision experience, integrating non-IBC assets from other ecosystems, including Ethereum, Solana, Avalanche, and Polkadot. Initially adopting Balancer-style pools, Osmosis now also features a concentrated liquidity model that is orders of magnitude more capital efficient, meaning that significantly less liquidity is required to handle the same amount of trading volume with minimal slippage.\n\nAs a true appchain, Osmosis has greater control over the full blockchain stack than traditional smart contract DEXs, which must follow the code of the parent chain that it is built on. This fine-grained control has enabled, for example, the development of Superfluid Staking, an extension of Proof of Stake that allows assets at the application layer to be staked to secure the chain. The customizability of appchains also allows implementing features like the Protocol Revenue module, which enables Osmosis to conduct on-chain arbitrage on behalf of OSMO stakers, balancing prices across pools while generating real yield revenue from this volume. Additionally, as a sovereign appchain, Osmosis governance can vote on upgrades to the protocol. One example of this was the introduction of a Taker Fee, which switched on the collection of exchange fees to generate diverse yield from Osmosis volume and distribute it to OSMO stakers.\n\nOsmosis is bringing the full centralized exchange experience to the decentralized world by building a cross-chain native DEX and trading suite that connects all chains over IBC, including Ethereum and Bitcoin. To reach this goal, Osmosis hosts an ever-expanding suite of DeFi applications aimed at providing a one-stop experience that includes lending, credit, margin, DeFi strategy vaults, power perps, fiat on-ramps, NFTs, stablecoins, and more — all of the functionalities that centralized exchange offer and more, in the trust-minimized environment of decentralized finance.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.osmosis.zone/',
        provider: 'Osmosis Foundation'
      },
      {
        address: 'https://rpc-osmosis.blockapsis.com',
        provider: 'chainapsis'
      },
      {
        address: 'https://osmosis-rpc.onivalidator.com',
        provider: 'Oni Validator ⛩️'
      },
      {
        address: 'https://osmosis-rpc.quickapi.com:443',
        provider: 'Chainlayer'
      },
      {
        address: 'https://rpc-osmosis.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/osmosis',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-osmosis.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://rpc-osmosis.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://osmosis-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-osmosis-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://osmosis.rpc.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://osmosis-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://osmosis.api.onfinality.io/public',
        provider: 'OnFinality'
      },
      {
        address: 'https://rpc-osmosis-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://osmosis-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://osmosis-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/osmosis/trpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'http://rpc-osmosis.freshstaking.com:31657',
        provider: 'FreshSTAKING'
      },
      {
        address: 'https://osmosis-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://osmosis-mainnet.rpc.l0vd.com:443',
        provider: 'L0vd.com ❤️'
      },
      {
        address: 'https://osmosis-rpc.reece.sh',
        provider: 'Reecepbcups'
      },
      {
        address: 'https://rpc.osmosis.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://rpc.osmosis.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://osmosis.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/osmosis/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://rpc.cros-nest.com/osmosis',
        provider: 'Crosnest'
      },
      {
        address: 'https://rpc-osmo.kewrnode.com',
        provider: 'Kewr Node'
      },
      {
        address: 'https://rpc.osmosis.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://osmosis-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://osmosis.drpc.org',
        provider: 'dRPC'
      },
      {
        address: 'https://osmosis-rpc.chainroot.io',
        provider: 'Chainroot'
      },
      {
        address: 'https://osmosis.rpc.quasarstaking.ai:443',
        provider: 'Quasar'
      },
      {
        address: 'https://osmosis-mainnet-tendermint.reliableninjas.com',
        provider: 'Reliable Ninjas'
      }
    ],
    rest: [
      {
        address: 'https://lcd.osmosis.zone/',
        provider: 'Osmosis Foundation'
      },
      {
        address: 'https://rest.osmosis.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://osmosis-lcd.quickapi.com:443',
        provider: 'Chainlayer'
      },
      {
        address: 'https://lcd-osmosis.blockapsis.com',
        provider: 'chainapsis'
      },
      {
        address: 'https://rest.lavenderfive.com:443/osmosis',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rest-osmosis.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://api-osmosis-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://api-osmosis.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://osmosis-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://osmosis.rest.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://osmosis-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api-osmosis-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://osmosis-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://lcd-osmosis.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://osmosis-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/osmosis/crpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://osmosis-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://osmosis-api.reece.sh',
        provider: 'Reecepbcups'
      },
      {
        address: 'https://api.osmosis.validatus.com:443',
        provider: 'Validatus'
      },
      {
        address: 'https://lcd.osmosis.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://osmosis-rest.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/osmosis/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://rest.cros-nest.com/osmosis',
        provider: 'Crosnest'
      },
      {
        address: 'https://rest-osmo.kewrnode.com',
        provider: 'Kewr Node'
      },
      {
        address: 'https://osmosis-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://osmosis-api.chainroot.io',
        provider: 'Chainroot'
      },
      {
        address: 'https://osmosis.api.quasarstaking.ai:443',
        provider: 'Quasar'
      },
      {
        address: 'https://osmosis-mainnet-cosmos.reliableninjas.com',
        provider: 'Reliable Ninjas'
      }
    ],
    grpc: [
      {
        address: 'osmosis.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc-osmosis-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'osmosis.grpc.stakin-nodes.com:443',
        provider: 'Stakin'
      },
      {
        address: 'osmosis-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-osmosis.cosmos-spaces.cloud:1130',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc-osmosis-01.stakeflow.io:6754',
        provider: 'Stakeflow'
      },
      {
        address: 'services.staketab.com:9010',
        provider: 'Staketab'
      },
      {
        address: 'osmosis-grpc.w3coins.io:12590',
        provider: 'w3coins'
      },
      {
        address: 'grpc-osmosis.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'osmosis-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'osmosis-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://grpc-osmosis.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'osmosis-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com ❤️'
      },
      {
        address: 'grpc-osmosis.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'grpc.osmosis.validatus.com:443',
        provider: 'Validatus'
      },
      {
        address: 'https://grpc.osmosis.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'osmosis-grpc.noders.services:10090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'osmosis-grpc.chainroot.io:443',
        provider: 'Chainroot'
      },
      {
        address: 'osmosis.grpc.quasarstaking.ai:443',
        provider: 'Quasar'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/osmosis',
      txPage: 'https://ezstaking.app/osmosis/txs/${txHash}',
      accountPage: 'https://ezstaking.app/osmosis/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/osmosis',
      txPage: 'https://www.mintscan.io/osmosis/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/osmosis/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/osmosis',
      txPage: 'https://ping.pub/osmosis/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://osmosis.explorers.guru',
      txPage: 'https://osmosis.explorers.guru/transaction/${txHash}',
      accountPage: 'https://osmosis.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/osmosis',
      txPage: 'https://atomscan.com/osmosis/transactions/${txHash}',
      accountPage: 'https://atomscan.com/osmosis/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/osmosis',
      txPage: 'https://explorer.tcnetwork.io/osmosis/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/osmosis/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/osmosis',
      txPage: 'https://staking-explorer.com/transaction.php?chain=osmosis&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=osmosis&addr=${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/osmosis',
      accountPage: 'https://stakeflow.io/osmosis/accounts/${accountAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/osmosis',
      txPage: 'https://exp.nodeist.net/osmosis/tx/${txHash}'
    },
    {
      kind: 'L0vd.com ❤️',
      url: 'https://explorers.l0vd.com/osmosis-mainnet',
      txPage: 'https://explorers.l0vd.com/osmosis-mainnet/tx/${txHash}'
    },
    {
      kind: 'Chainscope',
      url: 'https://chainsco.pe/osmosis',
      txPage: 'https://chainsco.pe/osmosis/tx/${txHash}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/osmosis',
      txPage: 'https://mainnet.whispernode.com/osmosis/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/osmosis/account/${accountAddress}'
    },
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/osmosis',
      txPage: 'https://explorer.chainroot.io/osmosis/transactions/${txHash}',
      accountPage: 'https://explorer.chainroot.io/osmosis/accounts/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://osmosis.valopers.com/',
      txPage: 'https://osmosis.valopers.com/transactions/${txHash}',
      accountPage: 'https://osmosis.valopers.com/account/${accountAddress}'
    }
  ],
  keywords: ['dex']
};
export default info;