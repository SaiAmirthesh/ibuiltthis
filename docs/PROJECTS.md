# Sai Amirthesh — Primary Projects

> Source: Verified repositories for `SaiAmirthesh`.
>
> This file contains the 4 primary engineering architectures showcased in the personal portfolio.

---

## 1. ExpenseOS

**Category:** Full Stack · Fintech · Mobile  
**Status:** In Progress  
**Year:** 2026  

**Description:**  
A collaborative financial vault and mobile expense management platform for tracking spending, splitting group bills (equal, exact, percentage), settling balances, and visualizing financial activity.

**Key Areas:**
- Personal expense tracking and spending analytics
- Collaborative group vaults
- Equal, exact, and percentage bill splitting
- Automated debt simplification and settlement balance engine
- Offline-first mobile client with fast local storage

**Tech Stack:**
- Java 25
- Spring Boot 4
- Spring Security
- Spring Data JPA
- PostgreSQL
- React Native
- Expo
- TanStack Query
- MMKV
- Docker

**GitHub:** https://github.com/SaiAmirthesh/ExpenseOS  

---

## 2. EduConflux

**Category:** Full Stack · Education · Backend  
**Status:** In Progress  
**Year:** 2026  

**Description:**  
A unified platform combining academic operations, communication, collaboration, classroom functionality, and AI assistance for educational institutions.

**Key Areas:**
- Enterprise backend architecture following Clean Architecture & SOLID
- Hierarchical Role-Based Access Control (RBAC)
- Academic operations, course materials, and scheduling
- Containerized multi-service Docker Compose infrastructure

**Tech Stack:**
- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- PostgreSQL
- React
- JWT
- Docker

**GitHub:** https://github.com/SaiAmirthesh  

---

## 3. CloudVault

**Category:** Cloud · Backend  
**Status:** Completed  
**Year:** 2026  

**Description:**  
A secure file management and sharing platform focused on file ownership, S3-compatible object storage via MinIO, metadata management, and secure expiring share links.

**Key Areas:**
- S3-compatible object storage via MinIO cluster
- File ownership isolation and metadata engine
- Encrypted share links with optional expiration and password protection
- JWT security and user context isolation

**Tech Stack:**
- Java
- Spring Boot
- PostgreSQL
- MinIO
- JWT
- Docker

**GitHub:** https://github.com/SaiAmirthesh/CloudVault  

---

## 4. AcademicHub

**Category:** Full Stack · Education  
**Status:** Completed  
**Year:** 2026  

**Description:**  
A modern university management platform providing secure role-based access for administrators, teachers, and students to manage academic operations through a unified dashboard.

**Key Areas:**
- Multi-role authentication (Admin, Faculty, Student)
- Department and course management
- Classroom join-code enrollment pipeline
- Arcjet runtime attack protection and rate limiting

**Tech Stack:**
- React
- TypeScript
- Node.js
- Express
- PostgreSQL
- Drizzle ORM
- Better Auth
- Arcjet
- Tailwind CSS

**GitHub:** https://github.com/SaiAmirthesh/AcademicHub  


# Sai Amirthesh — Primary Projects Detailed Specification

This document provides the structured data specification for the 4 primary projects displayed in Sai Amirthesh's portfolio.

---

## Primary Projects Summary

| # | Project Name | Category | Primary Stack | GitHub |
|---|--------------|----------|---------------|--------|
| 1 | **ExpenseOS** | Full Stack · Fintech · Mobile | Java 25, Spring Boot 4, PostgreSQL, React Native, Expo | [Repository ↗](https://github.com/SaiAmirthesh/ExpenseOS) |
| 2 | **EduConflux** | Full Stack · Education · Backend | Java, Spring Boot, Spring Security, Hibernate, React | [Profile ↗](https://github.com/SaiAmirthesh) |
| 3 | **CloudVault** | Cloud · Backend | Java, Spring Boot, PostgreSQL, MinIO, JWT, Docker | [Repository ↗](https://github.com/SaiAmirthesh/CloudVault) |
| 4 | **AcademicHub** | Full Stack · Education | React, TypeScript, Node.js, Express, PostgreSQL, Arcjet | [Repository ↗](https://github.com/SaiAmirthesh/AcademicHub) |

---

## Detailed Specifications

### 1. ExpenseOS
- **Overview:** A collaborative financial vault and personal expense management platform for tracking spending, splitting group bills, settling balances, and visualizing financial activity across web and mobile.
- **Problem:** Group bill splitting often suffers from complex non-transitive debt cycles and slow offline synchronization in mobile dead zones.
- **Approach:** Constructed an automated settlement balance engine paired with an offline-first mobile client using MMKV local storage and TanStack Query optimistic mutations.
- **Tech Stack:** Java 25, Spring Boot 4, Spring Security, Spring Data JPA, PostgreSQL, React Native, Expo, Expo Router, TanStack Query, MMKV, Docker.
- **GitHub:** https://github.com/SaiAmirthesh/ExpenseOS

### 2. EduConflux
- **Overview:** A unified platform combining academic operations, communication, collaboration, classroom functionality, and AI assistance for educational institutions.
- **Problem:** Institutions struggle with disconnected tools for attendance, coursework, grading, and communication without unified authorization.
- **Approach:** Designed a modular enterprise system implementing Clean Architecture principles with granular domain isolation and role-based policies.
- **Tech Stack:** Java, Spring Boot, Spring Security, Spring Data JPA, Hibernate, PostgreSQL, React, JWT, Docker.
- **GitHub:** https://github.com/SaiAmirthesh

### 3. CloudVault
- **Overview:** A secure file management and sharing platform focused on file ownership, S3-compatible object storage via MinIO, metadata management, and secure expiring share links.
- **Problem:** Cloud storage solutions require granular access delegation without exposing direct S3 bucket credentials or unauthenticated blob URLs.
- **Approach:** Implemented an intermediary tokenized gateway that issues time-expiring, password-protected presigned URLs for MinIO object buckets with full audit logging.
- **Tech Stack:** Java, Spring Boot, PostgreSQL, MinIO, JWT, Docker.
- **GitHub:** https://github.com/SaiAmirthesh/CloudVault

### 4. AcademicHub
- **Overview:** A modern university management platform providing secure role-based access for administrators, teachers, and students to manage academic operations through a unified dashboard.
- **Problem:** Academic operations are frequently fragmented across disparate portals vulnerable to brute-force credential stuffing.
- **Approach:** Unified administrative, faculty, and student portals into a single high-performance TypeScript stack secured with Arcjet threat detection and Better Auth sessions.
- **Tech Stack:** React, TypeScript, Vite, Node.js, Express, PostgreSQL, Drizzle ORM, Better Auth, Arcjet, Tailwind CSS.
- **GitHub:** https://github.com/SaiAmirthesh/AcademicHub
