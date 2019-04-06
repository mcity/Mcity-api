<template>
  <v-container>
    <v-card>
      <v-card-title class="headline primary white--text">
        OCTANE - Facility Control
      </v-card-title>
      <v-card-text class="text-xs-left">
        <p>
          Mcity developed the OCTANE API to enable software control of the Mcity test facility.
          OCTANE is a rest API with push messages through Socket.IO websockets.
        </p>
        <p>
          Click "Try It" to access documentation and a working implementation of the API.
          Use developer API key "reticulatingsplines" to work within the test environment.
        </p>
        <p>
          Click "Skyline" for access to a sample application that uses the production OCTANE instance.
          Skyline provides a web UI on top of the OCTANE API and enables point and click control and 
          enumeration of the test facility.
        </p>
        <p>
          The Mcity Test Facility has two environmemnts with implementations of OCTANE.
          Production API keys are included with your reservation reminder.
          Production API keys are active only during your reservation time period.
        </p>
        <p>
          You can contribute to the OCTANE standard through our GitHub Repository.
        </p>
      </v-card-text>
      <v-card-actions>
            <v-btn flat color="arbblue" href="https://mvillage.um.city/apidocs" target="_blank">Try It</v-btn>
            <v-btn flat color="arbblue" href="https://github.com/mcity/octane-api" target="_blank">OCTANE</v-btn>
            <v-btn flat color="arbblue" href="https://mvillage.um.city" target="_blank">Test Instance</v-btn>
            <v-btn flat color="arbblue" href="https://mcity.um.city" target="_blank">Prod Instance</v-btn>
            <v-btn flat color="arbblue" href="https://skyline.um.city" target="_blank">Skyline</v-btn>
      </v-card-actions>
    </v-card>
    <p></p>
    <v-card>
      <v-card-title class="headline primary white--text">
        OCTANE - Ann Arbor Connected Vehicle Test Enviornment (AACVTE)
      </v-card-title>
      <v-card-text class="text-xs-left">
        <p>
          Ann Arbor Connected Vehicle Test Environment limited implementation of the OCTANE API.
          This API enables query/enumeration of environment and Socket.IO websockets for real time data feeds.
          Mcity provides an implementation of Skyline, a web user interface for real time view of AACVTE.
        </p>
        <p>
          OCTANE is a rest API with push messages through Socket.IO websockets. Skyline is an interactive GUI
          built to run on OCTANE APIs and enable easy interaction with the API.
        </p>
        <p>
          Click "Try It" to access documentation and a working implementation of the API.
        </p>
        <p>
          The AACVTE OCTANE environment is accessible only to Leadership Circle companies and 
          researchers with the University of Michigan. To utilize the API directly to develop applications,
          contact mcity-engineering@umich.edu to request an application ID.
        </p>
        <p>
          You can contribute to the OCTANE standard through our GitHub Repository.
        </p>
      </v-card-text>
      <v-card-actions>
            <v-btn flat color="arbblue" href="https://aacvte.octane.um.city/apidocs" target="_blank">Try It</v-btn>
            <v-btn flat color="arbblue" href="https://github.com/mcity/octane-api" target="_blank">OCTANE</v-btn>
            <v-btn flat color="arbblue" href="https://aacvte.um.city" target="_blank">Skyline (AACVTE)</v-btn>
      </v-card-actions>
    </v-card>
    <p></p>
    <v-card>
      <v-card-title class="headline primary white--text">
        Scheduling - Booking/Calendar Management
      </v-card-title>
      <v-card-text class="text-xs-left">
        <p>
          Mcity Scheduling provides test facility availability information and the ability to book
          equipment or the test facility. In addition, scheduling provides a feed of upcoming
          member events.
        </p>
        <p>
          Click "Try It" to access documentation and a working implementation of the API.
          Contact mcity-engineering@umich.edu for a valid client_id.
        </p>
      </v-card-text>
      <v-card-actions>
            <v-btn flat color="arbblue" href="https://scheduling.um.city/apidocs" target="_blank">Try It</v-btn>
            <v-btn flat color="arbblue" href="https://scheduling.um.city" target="_blank">Production</v-btn>
      </v-card-actions>
    </v-card>
    <p></p>
    <v-card>
      <v-card-title class="headline primary white--text">
        Go - URL Shortener
      </v-card-title>
      <v-card-text class="text-xs-left">
        <p>
          Mcity Go allows for shrinking URLs with either random or custom resulting URL.
          URL links are generated on the https://go.um.city domain.
        </p>
        <p>
          Click "Try It" to access documentation and a working implementation of the API.
          Contact mcity-engineering@umich.edu for a valid client_id.
        </p>
      </v-card-text>
      <v-card-actions>
            <v-btn flat color="arbblue" href="https://go.um.city/apidocs" target="_blank">Try It</v-btn>
            <v-btn flat color="arbblue" href="https://go.um.city" target="_blank">Production</v-btn>
      </v-card-actions>
    </v-card>

    <p></p>
    <v-card>
      <v-card-title class="headline primary white--text">
        Members - Documentation and Publication
      </v-card-title>
      <v-card-text class="text-xs-left">
        <p>
          Mcity Members provides wiki like services supporting rendering of Markdown on the frontend.
          Webservices allow for search, CRUD operations, and retrieval with permissions enforced by role.
        </p>
        <p>
          Click "Try It" to access documentation and a working implementation of the API.
          Contact mcity-engineering@umich.edu for a valid client_id.
        </p>
      </v-card-text>
      <v-card-actions>
            <v-btn flat color="arbblue" href="https://members.um.city/apidocs" target="_blank">Try It</v-btn>
            <v-btn flat color="arbblue" href="https://members.um.city" target="_blank">Production</v-btn>
      </v-card-actions>
    </v-card>

   <p></p>
    <v-card>
      <v-card-title class="headline primary white--text">
        Transmission - File Management
      </v-card-title>
      <v-card-text class="text-xs-left">
        <p>
          Mcity Transmission allows for working with files within Mcity applications.
          Users of the API can store files for sharing with other members and enforce
          security and expiration of files and links generated by them. The API allows
          for discovery of existing file shares.
        </p>
        <p>
          Click "Try It" to access documentation and a working implementation of the API.
          Contact mcity-engineering@umich.edu for a valid client_id.
        </p>
      </v-card-text>
      <v-card-actions>
            <v-btn flat color="arbblue" href="https://transmission.um.city/apidocs" target="_blank">Try It</v-btn>
            <v-btn flat color="arbblue" href="https://transmission.um.city" target="_blank">Production</v-btn>
      </v-card-actions>
    </v-card>

    <p></p>
    <v-card>
      <v-card-title class="headline primary white--text">
        Data Garage - Dataset Management
      </v-card-title>
      <v-card-text class="text-xs-left">
        <p>
          Mcity Data Garage allows users to query, manipulate and create meta-data for member available datasets.
        </p>
        <p>
          Click "Try It" to access documentation and a working implementation of the API.
          Contact mcity-engineering@umich.edu for a valid client_id.
        </p>
      </v-card-text>
      <v-card-actions>
            <v-btn flat color="arbblue" href="https://garage.um.city/apidocs" target="_blank">Try It</v-btn>
            <v-btn flat color="arbblue" href="https://garage.um.city" target="_blank">Production</v-btn>
      </v-card-actions>
    </v-card>

    <p></p>
    <v-card>
      <v-card-title class="headline primary white--text">
        Projects Tracking - Project management
      </v-card-title>
      <v-card-text class="text-xs-left">
        <p>
          Mcity Project Tracking allows for query, manipulation, and creation of meta-data about 
          funded projects at Mcity. File storage on project endpoints is available through this API.
        </p>
        <p>
          Click "Try It" to access documentation and a working implementation of the API.
          Contact mcity-engineering@umich.edu for a valid client_id.
        </p>
      </v-card-text>
      <v-card-actions>
            <v-btn flat color="arbblue" href="https://projects.um.city/apidocs" target="_blank">Try It</v-btn>
            <v-btn flat color="arbblue" href="https://projects.um.city" target="_blank">Production</v-btn>
      </v-card-actions>
    </v-card>

    <p></p>
    <v-card>
      <v-card-title class="headline primary white--text">
        Keys - Access and Member management
      </v-card-title>
      <v-card-text class="text-xs-left">
        <p>
          Mcity keys provides authentication and authorization of users. Users of the API can manage accounts,
          permissions, query additional member detail, and develop new applications that interface with keys logins.
        </p>
        <p>
          Click "Try It" to access documentation and a working implementation of the API.
          Contact mcity-engineering@umich.edu for a valid client_id.
        </p>
      </v-card-text>
      <v-card-actions>
            <v-btn flat color="arbblue" href="https://keys.um.city/apidocs" target="_blank">Try It</v-btn>
            <v-btn flat color="arbblue" href="https://keys.um.city" target="_blank">Production</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
}
</script>
<style>

</style>
