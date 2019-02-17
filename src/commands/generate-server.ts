import {Command, flags} from '@oclif/command'
import {getFiles} from '../utils';
const fs = require('fs');
const prompts = require('prompts');
var path = require('path');
const replace = require('replace-in-file');

var appDir = path.dirname(require.main.filename);
var ncp = require('ncp').ncp;
 
ncp.limit = 16;

export default class GenerateServer extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  questions = [
    {
      type: 'text',
      name: 'wholename',
      message: 'Name of your server (e.g. Snap Chat)'
    },
    {
      type: 'text',
      name: 'identifier',
      message: 'Identifier for your server (e.g. snapchat)'
    },
    {
      type: 'text',
      name: 'local_db_name',
      message: 'Name of local database'
    },
    {
      type: 'text',
      name: 'local_test_db_name',
      message: 'Name of local test database'
    },
    {
      type: 'text',
      name: 'local_client_id',
      message: 'Name of local client id'
    },
    {
      type: 'text',
      name: 'local_client_secret',
      message: 'Local client secret (leave blank for random)',
      initial: '97H7F4FD72JF7BPQL0GACZ1'
    },
  ];

  async run() {
    const {args, flags} = this.parse(GenerateServer)

    const response = await prompts(this.questions);
    
    console.log(response);

    // MY_APP_IDENTIFIER
    // MY_APP_NAME
    // MY_LOCAL_DB_NAME
    // MY_LOCAL_CLIENT_ID
    // MY_LOCAL_CLIENT_SECRET 97H7F4FD72JF7BPQL0GACZ1
    // MY_BASE_64_ENCODING ZG9uZWRldjo5N0g3RjRGRDcySkY3QlBRTDBHQUNaMQ== (id:secret)
    // MY_TEST_DB_NAME

    // Define the template to load from
    let nodeServerDir = appDir + '/../src/templates/nodemongoserver/';
    let toCopyInto = response.identifier + '/';

    // Make the desired directory and copy all files
    if (!fs.existsSync(toCopyInto)){
      fs.mkdirSync(toCopyInto);
    }

    ncp(nodeServerDir, toCopyInto, function (err: any) {
      if (err) {
        return console.error(err);
      }

      // Get a list of all files
      let allFiles = getFiles(response.identifier, []);

      // Now replace all names within files
      let base64Encoding = Buffer.from(response.local_client_id + ":" + response.local_client_secret).toString('base64')
      replace.sync({files: allFiles, from: /MY_APP_NAME/g, to: response.wholename});
      replace.sync({files: allFiles, from: /MY_APP_IDENTIFIER/g, to: response.identifier});
      replace.sync({files: allFiles, from: /MY_LOCAL_DB_NAME/g, to: response.local_db_name});
      replace.sync({files: allFiles, from: /MY_TEST_DB_NAME/g, to: response.local_test_db_name});
      replace.sync({files: allFiles, from: /MY_LOCAL_CLIENT_SECRET/g, to: response.local_client_secret});
      replace.sync({files: allFiles, from: /MY_LOCAL_CLIENT_ID/g, to: response.local_client_id});
      replace.sync({files: allFiles, from: /MY_BASE_64_ENCODING/g, to: base64Encoding});

      console.log('Project created!');

    });

    
    
  }

}
