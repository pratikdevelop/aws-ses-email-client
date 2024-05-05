# Node.js Email Sending Application with AWS SES

This Node.js application demonstrates how to send emails using AWS SES (Simple Email Service). AWS SES provides a reliable and scalable solution for sending transactional emails, marketing campaigns, and notifications from your applications.

## Prerequisites

Before running this application, ensure you have the following prerequisites installed and configured:

- Node.js (version >= 12.x)
- AWS SDK for JavaScript (`aws-sdk` npm package)
- AWS IAM credentials with permissions to use AWS SES

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/pratikdevelop/aws-ses-email-client.git
   ```

2. Navigate to the project directory:

   ```bash
   cd aws-ses-email-client
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

## Configuration

1. Configure AWS SDK with IAM credentials and AWS region:

   Update the `index.js` file with your AWS IAM credentials and desired AWS region.

   ```javascript
   // config.js
  AWS.config.update({
  region: 'region', // Use the standard region identifier for Tokyo
  accessKeyId: 'Access keyId',
  secretAccessKey: 'secret Access Key',
  httpOptions: {
    agent: new https.Agent({
      rejectUnauthorized: false
    })
  }
  
});
   ```

2. Verify Email Addresses:

   In the AWS SES console, verify the sender and recipient email addresses you intend to use with this application to ensure email deliverability.

## Usage

1. Start the application:

   ```bash
   node app.js
   ```

2. Open your web browser and navigate to `http://localhost:3000` (or the specified port).

3. Use the application interface to send test emails:
   
   - Enter the recipient email address.
   - Specify the email subject and content.
   - Click "Send Email" to trigger the email sending process.

## Additional Information

- This application uses AWS SES to send emails. Ensure that you have the necessary permissions and budget for AWS SES usage.
- Customize the application logic in `app.js` to meet your specific email sending requirements.
- Handle error cases and implement robust error handling for production use.
- For more information about AWS SES and Node.js SDK, refer to the [AWS SDK for JavaScript Documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/).

## Contributing

Contributions are welcome! If you have suggestions, improvements, or bug fixes, please submit a pull request or open an issue on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.