# YEP-007 — Small, Independent Components

> *"Complex systems are built from simple, well-defined parts."*

---

## Status

**Accepted**

---

## Category

Engineering Principle

---

## Overview

Large software systems become easier to understand, maintain, test, and extend when they are composed of small, independent components.

At YapiTech, every component, module, service, and business entity should have a single, well-defined responsibility.

Rather than building monolithic systems where everything depends on everything else, we design software as collections of focused components that collaborate through clearly defined interfaces.

---

# Problem

As projects grow, developers often place unrelated responsibilities into the same file, class, module, or service.

Examples include:

- One API handling every business process.
- One React component rendering an entire page.
- One database table storing multiple business concepts.
- One service responsible for authentication, reporting, notifications, and payments.

These systems become difficult to understand, test, and extend.

A change in one area often creates unexpected problems elsewhere.

---

# Principle

Every software component should have one primary responsibility.

Components should collaborate rather than depend heavily upon one another.

Smaller components are easier to:

- understand
- test
- reuse
- replace
- extend

---

# Why It Matters

Breaking software into focused components provides:

- Better readability
- Easier maintenance
- Improved testing
- Greater reuse
- Lower coupling
- Higher scalability

A system composed of well-designed components can evolve without affecting unrelated parts of the application.

---

# Business Example

A school is not managed by one person performing every task.

Responsibilities are distributed across:

- Principal
- Teachers
- Administrators
- Guardians
- Learners

Each role has its own responsibility while working together to operate the school.

Software should follow the same approach.

---

# Software Example

Avoid:

```
SchoolService

↓

Admissions

Attendance

Reporting

Payments

Notifications

Authentication
```

Prefer:

```
Admission Service

Attendance Service

Reporting Service

Notification Service

Authentication Service
```

Each service focuses on a single business capability.

Together they provide the complete platform.

---

# Common Mistakes

Avoid:

- Large React components with multiple responsibilities.
- Massive service classes.
- Utility files containing unrelated functions.
- Database tables representing multiple business concepts.
- APIs that perform unrelated operations.

---

# Relationship to Other Principles

This principle strengthens:

- YEP-004 — Avoid Duplication
- YEP-005 — Engineer for Change
- YEP-006 — Multi-Tenant by Design

Small components make systems easier to evolve and scale.

---

# Related Standards

Examples include:

- YTS — Component Design
- YTS — Folder Structure
- YTS — API Separation
- YTS — Service Layer Standards
- YTS — React Component Standards

---

# Real YapiTech Example

The YapiTech Website is built using reusable React components.

Examples include:

- Hero
- Navigation
- Footer
- Engineering Philosophy
- Engineering Principles
- Services
- Contact

Each component has a single responsibility and can evolve independently.

Similarly, the EduCare Management System separates major business concepts into focused entities such as:

- School
- Academic Year
- Grade
- Section
- Learner
- Guardian
- Enrolment
- Attendance

Each entity models one business concept while collaborating with the others.

---

# Key Takeaways

- One responsibility per component.
- Build systems from independent building blocks.
- Prefer composition over monolithic design.
- Small components are easier to understand and maintain.
- Collaboration is better than coupling.

---

# Principle in Practice

Before writing code, ask:

- Does this component have one responsibility?
- Could another engineer understand it quickly?
- Would changing this affect unrelated features?
- Can this be reused elsewhere?
- Should this responsibility be extracted into its own component or service?