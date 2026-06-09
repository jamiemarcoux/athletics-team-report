# Athletics Team Year-End Summary Form

A comprehensive Acrobat fillable form template for documenting annual athletic program data across 5 pages.

## Overview

Complete multi-page reporting form for athletic programs including:
- **Page 1**: Team Information & Roster Management
- **Page 2**: Recruiting & Competitive Performance
- **Page 3**: Awards & Recognition
- **Page 4**: Academics, Development & Community Engagement
- **Page 5**: Alumni Engagement, Fundraising & Assessment

## Quick Start

1. **Open the web form**: Open `form-prototype.html` in your browser
2. **Fill out sections**: Navigate through 5 pages of form fields
3. **Auto-calculations**: Retention rate, GPA average, and totals calculate automatically
4. **Export/Print**: Print to PDF or export data as JSON

## Files Included

- `form-prototype.html` - Interactive 5-page form (open in browser)
- `form-schema.json` - Complete field definitions and validation rules
- `form-validation.js` - JavaScript validation and calculation functions
- `field-definitions.csv` - Spreadsheet reference of all fields
- `README.md` - This file

## Key Features

✅ **5 Comprehensive Pages** - Full athletic program reporting  
✅ **Auto-Calculations** - Retention rate, GPA, service hours, fundraising totals  
✅ **Responsive Design** - Works on desktop and mobile  
✅ **Print to PDF** - Built-in browser print functionality  
✅ **Field Validation** - Type checking and range validation  
✅ **Repeating Groups** - Up to 6 entries for awards, recruits, fundraising, etc.  
✅ **Fully Customizable** - Edit JSON schema to modify fields  

## Form Pages

### Page 1: Team Information & Roster
- Sport, Head Coach, Academic Year
- Roster totals (returning, graduating, not returning)
- **Auto-calculated**: Retention Rate (%)
- Departing student-athlete tracking (up to 6)
- Retention comments

### Page 2: Recruiting & Competitive Performance
- Committed/First-Year/Transfer recruits
- Overall record, Conference record, Conference finish
- Conference/NCAA tournament checkboxes
- Team highlights (up to 5)

### Page 3: Awards & Recognition
- All-Conference honors (up to 6)
- Major awards (up to 6)
- Academic All-Conference (up to 6)
- Academic All-Region/National (up to 6)

### Page 4: Academics & Community
- Fall/Spring/Annual team GPA (**auto-calculated**)
- Academic highlights
- Leadership development initiatives
- Community service projects (up to 4)
- **Auto-calculated**: Total service hours

### Page 5: Alumni, Fundraising & Assessment
- Alumni events and participation
- Fundraising events and amounts (up to 6)
- **Auto-calculated**: Total funds raised
- Program assessment (successes, challenges, priorities)
- Head coach signature and date

## Auto-Calculated Fields

The form automatically calculates:
- **Retention Rate** = (Returning / Total) × 100
- **Annual GPA** = (Fall GPA + Spring GPA) / 2
- **Expected Next Year Roster** = Returning + First-Year + Transfer
- **Total Service Hours** = Sum of all community service hours
- **Total Funds Raised** = Sum of all fundraising event amounts

## Usage

### Browser
```bash
# Simply open in your web browser
open form-prototype.html
```

### Node.js Integration
```javascript
const validator = require('./form-validation.js');
const data = { /* form data */ };
const v = new validator(data);
v.updateCalculatedFields();
console.log(v.generateSummary());
```

### PDF Generation
Use the form schema with libraries:
- **Node.js**: PDFKit
- **Python**: PyPDF, reportlab
- **Java/.NET**: iText
- **Adobe**: PDF Services API

## Customization

Edit `form-schema.json` to:
- Add/remove fields
- Modify validation rules
- Change field constraints
- Reorganize sections
- Update calculation formulas

## Field Reference

See `field-definitions.csv` for complete reference:
- All 100+ form fields
- Field types and constraints
- Required vs. optional
- Min/max values
- Description of each field

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - Use and modify freely

## Support

For questions or issues, please open a GitHub issue.

---

**Created**: June 2026  
**Version**: 1.0  
**Status**: Complete and ready to use
