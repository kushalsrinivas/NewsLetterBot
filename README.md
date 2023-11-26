
---

# Email Sender Project Documentation

## Overview

The Email Sender project is a tool designed to send emails to a given list of email addresses. It provides a convenient way for developers to send emails programmatically using the provided credentials.

## Prerequisites

Before using the Email Sender project, make sure you have the following:

- Node.js installed on your machine
- A Supabase account for managing email recipients (https://supabase.io/)
- .env.local file with the following credentials:

    ```dotenv
    EMAIL="your-email@example.com"
    PASS="your-email-password"
    SUPABASE_URL="your-supabase-api-url"
    SUPABASE_KEY="your-supabase-api-key"
    ```

## Setup

1. Clone the project repository:

    ```bash
    git clone https://github.com/your-username/email-sender.git
    ```

2. Navigate to the project directory:

    ```bash
    cd email-sender
    ```

3. Install project dependencies:

    ```bash
    npm install
    ```

4. Create a .env.local file in the root directory and add your credentials:

    ```dotenv
    EMAIL="your-email@example.com"
    PASS="your-email-password"
    SUPABASE_URL="your-supabase-api-url"
    SUPABASE_KEY="your-supabase-api-key"
    ```

## Usage

To use the Email Sender project, follow these steps:

1. Run the application:

    ```bash
    npm start
    ```

2. The application will prompt you for the email subject and body.

3. It will then fetch the list of email recipients from your Supabase database.

4. Finally, it will send the specified email to each recipient.

## Contributing

If you would like to contribute to the development of the Email Sender project, please follow these steps:

1. Fork the repository.

2. Create a new branch:

    ```bash
    git checkout -b feature/new-feature
    ```

3. Make your changes and commit them:

    ```bash
    git commit -m "Add new feature"
    ```

4. Push to the branch:

    ```bash
    git push origin feature/new-feature
    ```

5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

