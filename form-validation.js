class AthleticsFormValidator {
  constructor(formData = {}) {
    this.formData = formData;
    this.errors = {};
  }

  validateAll() {
    this.errors = {};
    this.validateRosterData();
    this.validateAcademicData();
    return {
      isValid: Object.keys(this.errors).length === 0,
      errors: this.errors,
      errorCount: Object.keys(this.errors).length
    };
  }

  validateRosterData() {
    const { roster_total, roster_returning, roster_graduating, roster_not_returning } = this.formData;
    if (roster_total !== undefined && isNaN(roster_total)) {
      this.errors.roster_total = 'Total roster size must be a number';
    }
    if (roster_total && roster_returning !== undefined && roster_graduating !== undefined && roster_not_returning !== undefined) {
      const sum = parseInt(roster_returning) + parseInt(roster_graduating) + parseInt(roster_not_returning);
      if (sum > parseInt(roster_total)) {
        this.errors.roster_consistency = 'Sum of athletes cannot exceed total roster size';
      }
    }
  }

  validateAcademicData() {
    const { fall_gpa, spring_gpa } = this.formData;
    const validateGPA = (value, fieldName) => {
      if (value === undefined) return;
      if (isNaN(value)) {
        this.errors[fieldName] = fieldName + ' must be a number';
        return;
      }
      value = parseFloat(value);
      if (value < 0 || value > 4.0) {
        this.errors[fieldName] = fieldName + ' must be between 0.0 and 4.0';
      }
    };
    validateGPA(fall_gpa, 'fall_gpa');
    validateGPA(spring_gpa, 'spring_gpa');
  }

  calculateRetentionRate() {
    const { roster_total, roster_returning } = this.formData;
    if (!roster_total || roster_total === 0) return 0;
    return (parseInt(roster_returning) / parseInt(roster_total)) * 100;
  }

  calculateAnnualGPA() {
    const { fall_gpa, spring_gpa } = this.formData;
    if (!fall_gpa || !spring_gpa) return 0;
    const average = (parseFloat(fall_gpa) + parseFloat(spring_gpa)) / 2;
    return Math.round(average * 100) / 100;
  }

  updateCalculatedFields() {
    this.formData.retention_rate = this.calculateRetentionRate();
    this.formData.annual_gpa = this.calculateAnnualGPA();
    return this.formData;
  }

  generateSummary() {
    return {
      teamInfo: {
        sport: this.formData.sport,
        headCoach: this.formData.head_coach,
        academicYear: this.formData.academic_year
      },
      roster: {
        total: this.formData.roster_total,
        returning: this.formData.roster_returning,
        retentionRate: this.formData.retention_rate?.toFixed(1) + '%'
      },
      academics: {
        fallGPA: this.formData.fall_gpa,
        springGPA: this.formData.spring_gpa,
        annualGPA: this.formData.annual_gpa?.toFixed(2)
      }
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AthleticsFormValidator;
}
