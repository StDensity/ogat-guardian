# OGAT Guardian - News Website

This is a satire news website project built using Next.js, designed to deliver news about the OGAT (Of Guards and Thieves) gaming community. It features articles, author profiles, category browsing, a community section, and more.

## Features

*   **News Articles:** Browse and read news articles with rich text formatting, images, and author information.
*   **Author Profiles:** View profiles of the authors contributing to the site.
*   **Category Browsing:** Explore news articles organized by category.
*   **Community Section:** Access community resources like the OGATCHAT podcast archive, OGATHAX website, and information about Project Ball.
*   **Search Functionality:** Search for articles using keywords.
*   **Responsive Design:** Optimized for various screen sizes.
*   **Theme Support:** Light and dark theme switching.
*   **User Authentication:** Sign in functionality (with placeholders).
*   **Subscription:** Newsletter subscription feature.
*   **Terms of Service (TOS):** A page displaying the site's terms.
*   **Contact Information:** Details on how to get in touch.
*   **Work with Us:** Information for potential contributors.
*   **Interactive UI:** Features like carousels, dropdown menus, and more.
*   **Weather Widget:** Displays local weather for a specific location.

## Technologies Used

*   **Next.js:** React framework for building web applications.
*   **TypeScript:** Typed JavaScript for enhanced development.
*   **Supabase:** Database.
*   **Cloudflare Turnstile:** Spam protection.
*   **Tailwind CSS:** Utility-first CSS framework.
*   **Contentful:** Headless CMS for content management.
*   **Shadcn/ui:** UI component library


## Getting Started

1.  **Clone the Repository:**

    ```bash
    git clone <repository_url>
    cd ogat-guardian
    ```
2.  **Install Dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  **Set up Environment Variables:**
    
    Note: There is no mock apis so, if you can use fake data or don't run the pages which uses the contentful api.

    *   Create a `.env.local` file in the root directory.
    *   Add your Contentful API keys and other necessary variables. Example:

        ```
        CONTENTFUL_SPACE_ID=<your_contentful_space_id>
        CONTENTFUL_ACCESS_TOKEN=<your_contentful_access_token>
         CONTENTFUL_BRANCH=<your_contentful_environment_branch>
        ```
    *   You can copy/paste this from the provided file `sample.env.local`

4.  **Run the Development Server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
5.  **Open the application in your browser:**

    Visit [`http://localhost:3000`](http://localhost:3000) in your browser.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

This readme is drafted by [aitudio](https://aistudio.google.com/prompts) and used [mufeedvh/code2prompt](https://github.com/mufeedvh/code2prompt) to generate LLM prompt. 