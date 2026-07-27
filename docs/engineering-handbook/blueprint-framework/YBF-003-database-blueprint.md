# YBF-003 — Database Blueprint

> **Blueprint Before Build**

**Framework:** YapiTech Blueprint Framework (YBF)  
**Version:** 1.0  
**Status:** Active  
**Owner:** YapiTech Engineering  
**Category:** Data Architecture  
**Last Updated:** July 2026

---

# Chapter 3 — Database Blueprint

## Purpose

The Database Blueprint transforms the Business Blueprint into a structured data model.

Rather than immediately creating database tables, this blueprint identifies the business entities, their relationships, ownership, lifecycle, and data flow.

The objective is to ensure that the database reflects how the business operates rather than forcing the business to fit a database design.

This blueprint serves as the bridge between business analysis and technical implementation.

---

# Blueprint Philosophy

> **Model the business before modelling the data.**

Data exists because the business exists.

Every entity in the database should represent a real business concept.

Every relationship should reflect a real business relationship.

Every attribute should have a business purpose.

If an entity cannot be explained in business language, it probably does not belong in the database.

---

# Why This Blueprint Exists

Many database projects begin by creating tables immediately.

This often results in:

- Duplicate entities
- Weak relationships
- Poor naming
- Missing business rules
- Difficult maintenance
- Technical debt

The Database Blueprint eliminates these problems by ensuring the data model is driven entirely by the business model.

---

# Objectives

The Database Blueprint aims to:

- Identify business entities.
- Define entity ownership.
- Identify relationships.
- Define entity lifecycles.
- Identify attributes.
- Define cardinality.
- Prepare for schema design.

---

# Inputs

Before beginning this blueprint, gather:

- Business Vision Blueprint (YBF-001)
- Business Blueprint (YBF-002)
- Business Domain Catalogue
- Business Rules
- Business Processes
- Information Flow
- Stakeholder Register

---

# Blueprint Process

## Step 1 — Identify Business Entities

Identify every important noun in the business.

Examples:

- School
- Learner
- Teacher
- Guardian
- Class
- Subject
- Attendance
- Assessment

Each entity should represent something the business manages.

Deliverable:

Entity Catalogue

---

## Step 2 — Define Entity Purpose

For every entity answer:

- Why does this entity exist?
- What business value does it represent?

Deliverable:

Entity Descriptions

---

## Step 3 — Define Entity Ownership

Every entity must have a business owner.

Examples:

Learner

Owner:
Admissions Department

Attendance

Owner:
Teachers

Assessment

Owner:
Academic Department

Deliverable:

Ownership Matrix

---

## Step 4 — Identify Relationships

Determine how entities relate.

Examples:

School
↓

Class

↓

Learner

↓

Guardian

↓

Attendance

↓

Assessment

Deliverable:

Relationship Catalogue

---

## Step 5 — Define Cardinality

Identify relationship types.

Examples:

One School → Many Classes

One Class → Many Learners

One Learner → Many Attendance Records

One Teacher → Many Classes

Many Learners → Many Subjects

Deliverable:

Cardinality Matrix

---

## Step 6 — Define Entity Lifecycle

Every entity has a lifecycle.

Example:

Prospective Learner

↓

Applicant

↓

Enrolled Learner

↓

Active Learner

↓

Graduated Learner

↓

Archived Learner

Deliverable:

Lifecycle Diagrams

---

## Step 7 — Define Attributes

Identify important information stored for every entity.

Example

Learner

Attributes:

- Learner ID
- First Name
- Last Name
- Date of Birth
- Gender
- Admission Date
- Status

Deliverable:

Attribute Catalogue

---

## Step 8 — Validate Against Business Rules

Confirm that every relationship satisfies the rules documented in YBF-002.

Examples:

✓ Every learner belongs to one school.

✓ Attendance belongs to one learner.

✓ Assessments belong to one subject.

Deliverable:

Business Rule Validation Report

---

# Deliverables

Completing this blueprint produces:

- Entity Catalogue
- Entity Descriptions
- Ownership Matrix
- Relationship Catalogue
- Cardinality Matrix
- Lifecycle Models
- Attribute Catalogue
- Business Rule Validation

These become the direct inputs for the physical database schema.

---

# Definition of Done

This blueprint is complete when:

✓ All entities are identified.

✓ Every entity has a business purpose.

✓ Entity ownership is documented.

✓ Relationships are validated.

✓ Cardinality is defined.

✓ Lifecycles are documented.

✓ Attributes are identified.

✓ Business rules are satisfied.

---

# Common Mistakes

Avoid:

- Creating tables before identifying entities.
- Naming entities using technical language.
- Ignoring ownership.
- Mixing business entities with implementation objects.
- Adding unnecessary attributes.
- Ignoring lifecycle states.

Remember:

The database represents the business.

Not the application.

---

# Example

## Product

EduCare Management System

### Business Entities

- School
- Campus
- Academic Year
- Grade
- Section
- Class
- Learner
- Guardian
- Teacher
- Subject
- Enrolment
- Attendance
- Assessment
- Timetable
- Report Card

---

### Example Relationship

School

↓

Academic Year

↓

Grade

↓

Section

↓

Class

↓

Learner

↓

Attendance

↓

Assessment

---

### Example Cardinality

School

1 → Many Academic Years

Academic Year

1 → Many Grades

Grade

1 → Many Sections

Section

1 → Many Classes

Class

1 → Many Learners

Learner

1 → Many Attendance Records

Learner

1 → Many Assessments

---

### Example Lifecycle

Learner

Prospective

↓

Applied

↓

Enrolled

↓

Active

↓

Graduated

↓

Archived

---

# Relationship to the Framework

```
Business Vision Blueprint

↓

Business Blueprint

↓

Database Blueprint

↓

Database Schema

↓

API Blueprint

↓

Implementation Blueprint
```

The Database Blueprint is the final business-focused blueprint before technical implementation begins.

Once this blueprint is approved, engineers may begin designing the physical database.

---

# Blueprint Summary

| Item | Output |
|------|--------|
| Entities | Identified |
| Ownership | Documented |
| Relationships | Defined |
| Cardinality | Validated |
| Lifecycles | Modelled |
| Attributes | Identified |
| Business Rules | Verified |
| Next Blueprint | **Database Schema (schema.sql)** |

---

# Closing Principle

> **A database should tell the story of the business.**

If the business changes, the database should evolve with it.

If the database cannot explain the business, it has been designed incorrectly.

# **Blueprint Before Build**