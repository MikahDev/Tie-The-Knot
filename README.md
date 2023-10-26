# Tie The Knot - Symfony Wedding Guest Management

## Introduction

**Tie The Knot** is a personal project, created as a fun and practical tool to assist with managing the guest aspects of my wedding. Using Symfony, this application is designed to simplify the collection of guest information and manage RSVPs, reflecting the unique needs of our special day.

## Project Overview

This repository is a Symfony-based application tailored for wedding event management. Its core function is to streamline guest registrations, maintain their details, and aid in overall event organization.

## Features

- **Guest Registration**: A custom form for guests to submit their RSVPs along with their contact details, meal choices, and any personal notes or messages.
- **Data Management**: Efficiently handles storing, updating, and retrieving guest information, making the event planning process smoother.
- **Responsive Layout**: Designed to be accessible and user-friendly across different devices, ensuring guests can respond easily.
- **Wedding Themed UI**: The user interface echoes the theme and colors of our wedding, providing a cohesive and joyful user experience.

## Technical Details

- **Symfony Framework**: Utilizes Symfony to structure the project, ensuring robustness and scalability.
- **Database**: MySql for managing guest data efficiently.
- **Deployer Read**: Deployer is ready to deploy and update code easly

## Running the Project

1. **Clone the Repository**: 
   ```bash
   git clone [repository URL]

2. **Install Dependencies**: 
   ```bash
   composer install

3. **Set Up the Environment**: 
   Configure your .env file with the required settings (database configuration, etc.).

4. **Run Database Migrations**: 
   ```bash
   php bin/console doctrine:migrations:migrate

5. **Start the Project**: 
   ```bash
   symfony server:start

## Personal Note

This project is a special part of our wedding preparations, embodying both a personal challenge and a unique way to contribute to our big day. It's about learning, creating, and celebrating—a digital keepsake that's as meaningful as it is functional.
