# Healthcare Patient History & Medical Record Management using HBase

A simple academic project for managing patient medical records using **Apache HBase**, with a responsive **HTML, CSS, and JavaScript** frontend.

## 🌐 Live Website

https://sarumathicsc.github.io/Healthcare-Patient-History-HBase/

## 📌 Project Overview

The **Healthcare Patient History & Medical Record Management System** demonstrates how HBase can be used to store and manage healthcare-related patient records.

The system maintains patient information such as:

* Patient ID
* Patient Name
* Age
* Gender
* Blood Group
* Diagnosis
* Symptoms
* Allergy
* Doctor
* Medicine
* Treatment Date

The project demonstrates **CRUD operations in HBase** and provides a user-friendly web interface for viewing and managing patient information.

> **Note:** All patient information used in this project is fictional and intended only for academic demonstration.

## 🎯 Objectives

* To understand HBase table creation and data storage.
* To implement CRUD operations using HBase Shell.
* To understand row keys, column families, and column qualifiers.
* To manage patient medical records efficiently.
* To create a simple web interface for displaying patient information.
* To implement patient search and patient insertion functionality.

## 🛠️ Technologies Used

### Backend / Database

* Apache HBase 2.6.5
* HBase Shell
* Apache ZooKeeper
* Docker

### Frontend

* HTML5
* CSS3
* JavaScript

### Development Environment

* Windows
* Docker Desktop
* Git
* GitHub
* GitHub Pages

## 🗄️ HBase Database Design

### Table Name

```text
patient_records
```

### Column Families

```text
patient
medical
treatment
```

### Example Structure

```text
patient_records

Row Key: P101

patient:name       → Arun
patient:age        → 35
patient:gender     → Male
patient:bloodgroup → O+

medical:diagnosis  → Diabetes
medical:symptoms   → Fatigue
medical:allergy    → None

treatment:doctor   → Dr. Kumar
treatment:medicine → Metformin
treatment:date     → 2026-10-05
```

## 🔄 HBase CRUD Operations

### 1. Create Table

```hbase
create 'patient_records', 'patient', 'medical', 'treatment'
```

### 2. Insert Data

```hbase
put 'patient_records', 'P101', 'patient:name', 'Arun'
put 'patient_records', 'P101', 'patient:age', '35'
put 'patient_records', 'P101', 'patient:gender', 'Male'
put 'patient_records', 'P101', 'patient:bloodgroup', 'O+'
```

### 3. Read Data

Read a particular patient:

```hbase
get 'patient_records', 'P101'
```

Read all patient records:

```hbase
scan 'patient_records'
```

### 4. Update Data

```hbase
put 'patient_records', 'P103', 'medical:symptoms', 'Wheezing'
```

### 5. Delete Data

```hbase
delete 'patient_records', 'P103', 'patient:phone'
```

### 6. Describe Table

```hbase
describe 'patient_records'
```

## 💻 Frontend Features

### Dashboard

Displays:

* Total Patients
* Total Doctors
* Total Medical Records

### Patient Records

Displays patient information in a table.

### Search Patient

Patients can be searched using:

* Patient ID
* Patient Name

### Add New Patient

The frontend provides a form to enter a new patient record.

The system also checks for duplicate Patient IDs before adding a patient.

### Treatment Information

Displays:

* Diagnosis
* Doctor
* Medicine
* Treatment Date

## 📁 Project Structure

```text
Healthcare-Patient-History-HBase/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

## 🔗 Project Workflow

```text
             User
               │
               ▼
        Web Interface
        HTML + CSS + JS
               │
       ┌───────┴────────┐
       │                │
       ▼                ▼
 Patient Search     Add Patient
       │                │
       └───────┬────────┘
               ▼
        Patient Records
               │
               ▼
             HBase
               │
      ┌────────┼────────┐
      ▼        ▼        ▼
   Patient   Medical  Treatment
```

## 📚 Topics Demonstrated

### HBase

* HBase architecture
* HBase Shell
* Row Keys
* Column Families
* Column Qualifiers
* CRUD operations
* `create`
* `put`
* `get`
* `scan`
* `delete`
* `describe`

### Web Development

* HTML5
* CSS3
* JavaScript
* DOM manipulation
* Event handling
* Form handling
* Dynamic table generation
* Search functionality
* Responsive design

## ⚠️ Important Note

The GitHub Pages frontend is a **static demonstration interface**. The browser does not directly connect to the HBase database.

The patient data displayed by the frontend is sample/fictional data corresponding to the academic HBase demonstration.

For a production system, a backend API would be required to securely connect the web application with HBase.

## 🎓 Academic Use

This project is developed for academic learning and demonstration of **Big Data, HBase, database management, and web development concepts**.

## 👩‍💻 Author

**Sarumathi H**

B.Tech – Artificial Intelligence & Data Science

GitHub: https://github.com/sarumathicsc
