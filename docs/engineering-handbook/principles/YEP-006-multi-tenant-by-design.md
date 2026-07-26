# YEP-006 — Multi-Tenant by Design

> *"Build one platform that serves many organisations while protecting each organisation's independence."*

---

## Status

**Accepted**

---

## Category

Engineering Principle

---

## Overview

Modern software is increasingly delivered as Software as a Service (SaaS), where a single platform serves many independent organisations.

At YapiTech, systems should be designed with multi-tenancy in mind whenever it provides business value.

Each organisation should operate independently while benefiting from a shared, scalable platform.

Multi-tenancy is not merely a deployment strategy—it is an architectural principle that influences data modelling, security, APIs, and application design.

---

# Problem

Many systems are designed for a single organisation.

As demand grows, developers often duplicate the entire application for each new customer.

This leads to:

- Multiple deployments
- Higher infrastructure costs
- Inconsistent versions
- Difficult maintenance
- Slow feature delivery

Every customer becomes a separate software project.

---

# Principle

Design systems so that multiple organisations can use the same application while maintaining complete separation of their data and operations.

Each tenant should experience the platform as if it were built exclusively for them.

---

# Why It Matters

A well-designed multi-tenant architecture provides:

- Lower operational costs
- Easier maintenance
- Faster feature delivery
- Simplified deployments
- Centralised security updates
- Greater scalability

It allows YapiTech to improve one platform while every customer benefits.

---

# Business Example

EduCare serves multiple schools.

Each school has its own:

- Learners
- Guardians
- Teachers
- Classes
- Academic Years
- Attendance
- Reports

Although every school uses the same application, no school should be able to access another school's information.

Each school operates independently while sharing the same platform.

---

# Software Example

Instead of:

```text
EduCare School A

Separate Database

Separate Server

Separate Application
```

and

```text
EduCare School B

Separate Database

Separate Server

Separate Application
```

Prefer:

```text
EduCare Platform

↓

School

↓

Learners

Teachers

Guardians

Enrolments

Attendance
```

Every business entity belongs to a School.

The platform remains one application while each school's data is isolated.

---

# Common Mistakes

Avoid:

- Building separate applications for every customer.
- Omitting tenant identifiers from business entities.
- Allowing data from one tenant to be visible to another.
- Hardcoding customer-specific behaviour.
- Treating multi-tenancy as an afterthought.

---

# Relationship to Other Principles

This principle builds upon:

- YEP-001 — Model the Business, Not the Screen
- YEP-002 — Separate Identity from State
- YEP-005 — Engineer for Change

Together they create systems that are scalable, maintainable, and adaptable.

---

# Related Standards

Examples include:

- YTS — Tenant Isolation
- YTS — Database Design Standards
- YTS — API Authorisation
- YTS — Row-Level Security

---

# Real YapiTech Example

The EduCare Management System models every major business entity as belonging to a School.

Examples include:

- Academic Years
- Grades
- Sections
- Learners
- Teachers
- Guardian Relationships
- Enrolments
- Attendance Events

This enables one EduCare platform to support many independent schools while ensuring that each school's information remains isolated and secure.

---

# Key Takeaways

- Design platforms for many organisations.
- Isolate tenant data completely.
- Share the application—not the customer data.
- Scale through architecture rather than duplication.
- Every tenant should feel like they own the platform.

---

# Principle in Practice

Before writing code, ask:

- Which organisation owns this data?
- Can another tenant ever access this record?
- Does this entity belong to a School?
- Will this design scale to hundreds or thousands of tenants?
- Am I building a platform or a one-off application?

---

## Architect's Note

Multi-tenancy is one of the defining characteristics of YapiTech's software strategy.

Whenever practical, products should be designed as configurable platforms capable of serving many independent organisations through a shared architecture.

This principle enables YapiTech to scale sustainably while delivering consistent quality across all customers.