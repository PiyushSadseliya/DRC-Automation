
@AssessmentBackgroundWait
Feature: Backgroung process wait till Record Reflect in Assessement 

  Scenario: Record display on Manual Assessement Page 
    Given After Efiling Wait for Five Minutes
    Then Records should be in Assessment Records

