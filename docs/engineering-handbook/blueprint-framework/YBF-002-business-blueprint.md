# YBF-002 — Business Blueprint

> **Blueprint Before Build**

**Framework:** YapiTech Blueprint Framework (YBF)  
**Version:** 1.0  
**Status:** Active  
**Owner:** YapiTech Engineering  
**Category:** Business Analysis  
**Last Updated:** July 2026

---

# Chapter 2 — Business Blueprint

## Purpose

The Business Blueprint transforms the product vision into a structured model of how the business operates.

While the Business Vision Blueprint explains **why** the product exists, the Business Blueprint explains **how** the business functions.

It identifies the business domains, stakeholders, processes, rules, and capabilities that the software must support.

This blueprint becomes the bridge between business understanding and technical design.

---

# Blueprint Philosophy

> **Model the business before modelling the database.**

Software should reflect business operations.

Before creating database tables or APIs, engineers must understand:

- The business structure.
- The business processes.
- The people involved.
- The business rules.
- The flow of information.

Technology should mirror the business—not redefine it.

---

# Why This Blueprint Exists

Many systems fail because developers begin designing databases before understanding how the organisation actually works.

This often leads to:

- Poorly designed entities.
- Duplicate data.
- Missing business rules.
- Complex workarounds.
- Costly redesigns.

The Business Blueprint prevents these issues by documenting the business model before any technical modelling begins.

---

# Objectives

The Business Blueprint aims to:

- Understand how the organisation operates.
- Identify the major business domains.
- Define stakeholders and their responsibilities.
- Document business processes.
- Capture business rules.
- Identify functional capabilities.
- Prepare for database modelling.

---

# Inputs

Before completing this blueprint, gather:

- Business Vision Blueprint (YBF-001)
- Stakeholder interviews
- Business process documentation
- Existing workflows
- Organisational structure
- Policies and procedures
- Regulatory requirements
- Industry best practices

---

# Blueprint Process

## Step 1 — Identify Business Domains

Divide the organisation into logical business areas.

Examples:

- Admissions
- Academics
- Finance
- Human Resources
- Communication
- Reporting

Deliverable:

Business Domain Catalogue.

---

## Step 2 — Identify Stakeholders

Document everyone who interacts with the business.

Examples:

- Customers
- Employees
- Administrators
- Managers
- External organisations
- Government departments

Deliverable:

Stakeholder Register.

---

## Step 3 — Map Business Processes

Document the key workflows that keep the business running.

Examples:

- Register a learner.
- Record attendance.
- Capture assessment marks.
- Generate reports.
- Process payments.

Deliverable:

Business Process Catalogue.

---

## Step 4 — Identify Business Rules

Business rules define how the organisation operates.

Examples:

- Every learner must belong to one school.
- Attendance cannot be recorded for inactive learners.
- Only teachers may capture assessment marks.

Deliverable:

Business Rules Register.

---

## Step 5 — Identify Business Capabilities

Capabilities describe what the business must be able to do.

Examples:

- Manage learners.
- Manage staff.
- Produce reports.
- Communicate with parents.
- Track attendance.

Deliverable:

Business Capability Map.

---

## Step 6 — Define Information Flow

Describe how information moves through the business.

Questions:

- Where does information originate?
- Who updates it?
- Who consumes it?
- How does it move between departments?

Deliverable:

Information Flow Diagram.

---

# Deliverables

Completing this blueprint produces:

- Business Domain Catalogue
- Stakeholder Register
- Business Process Catalogue
- Business Rules Register
- Business Capability Map
- Information Flow Diagram

These outputs become the inputs for YBF-003 — Database Blueprint.

---

# Definition of Done

This blueprint is complete when:

✓ Business domains are identified.

✓ Stakeholders are documented.

✓ Core business processes are mapped.

✓ Business rules are recorded.

✓ Business capabilities are defined.

✓ Information flow is understood.

✓ Stakeholders validate the business model.

---

# Common Mistakes

Avoid:

- Designing entities before understanding workflows.
- Ignoring business rules.
- Combining unrelated business domains.
- Assuming processes instead of validating them.
- Modelling software features instead of business activities.

Remember:

Businesses do not operate like databases.

Databases should operate like businesses.

---

# Example

## Product

EduCare Management System

### Business Domains

- School Management
- Learner Management
- Staff Management
- Academic Management
- Attendance
- Assessments
- Communication
- Reporting

---

### Stakeholders

- School Administrator
- Principal
- Teacher
- Learner
- Parent / Guardian
- Department of Education

---

### Core Business Processes

- Register learner
- Enrol learner
- Assign class
- Record attendance
- Capture marks
- Generate report card
- Notify parents

---

### Business Rules

- Every learner must belong to one school.
- Every class belongs to one academic year.
- Every teacher is assigned to at least one class.
- Attendance is recorded once per school day.
- Marks may only be entered by authorised teachers.

---

### Business Capabilities

- Manage schools
- Manage learners
- Manage teachers
- Manage enrolments
- Manage attendance
- Manage assessments
- Generate reports
- Send notifications

---

### Information Flow

Admission → Enrolment → Class Allocation → Attendance → Assessment → Reporting → Parent Communication

---

# Relationship to the Framework

```
Business Vision Blueprint
        │
        ▼
Business Blueprint
        │
        ▼
Database Blueprint
        │
        ▼
API Blueprint
        │
        ▼
Implementation Blueprint
        │
        ▼
Deployment Blueprint
```

The Business Blueprint converts business understanding into structured business knowledge that can be modelled technically.

---

# Blueprint Summary

| Item | Output |
|------|--------|
| Business Domains | Defined |
| Stakeholders | Identified |
| Business Processes | Documented |
| Business Rules | Recorded |
| Business Capabilities | Mapped |
| Information Flow | Understood |
| Next Blueprint | **YBF-003 — Database Blueprint** |

---

# Closing Principle

> **A well-designed system begins with a well-understood business.**

Understand the organisation.

Model the business.

Then design the software.

# **Blueprint Before Build**