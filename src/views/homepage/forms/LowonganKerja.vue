<template>
  <ContainerWidu>
    <v-row>
      <v-col cols="12">
        <base-material-card color="success" inline title="Form Elements" class="px-5 py-3">
          <v-subheader class="display-1 mt-3">Text fields</v-subheader>

          <v-form class="pt-1">
            <v-text-field label="With help" outlined class="ml-4" />

            <v-text-field label="Password" outlined type="password" class="ml-4" />

            <v-subheader class="display-1 mt-3">Checkboxes</v-subheader>

            <v-row no-gutters>
              <v-col cols="2">
                <v-checkbox input-value="true" label="On" value class="mt-0 ml-4" />
              </v-col>

              <v-col cols="2">
                <v-checkbox label="Off" class="mt-0 ml-4" />
              </v-col>

              <v-col cols="4">
                <v-checkbox indeterminate label="Indeterminate" value class="mt-0 ml-4" />
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col cols="2">
                <v-checkbox disabled input-value="true" label="On Disabled" class="mt-0 ml-4" />
              </v-col>

              <v-col cols="4">
                <v-checkbox disabled label="Off Disabled" value class="mt-0 ml-4" />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" lg="3">
                <v-subheader class="display-1 mt-3">Radios</v-subheader>

                <v-radio-group column class="ml-4 mt-0">
                  <v-radio label="Column Option 1" value="radio-1" />

                  <v-radio label="Column Option 2" value="radio-2" />
                </v-radio-group>
              </v-col>

              <v-col cols="12" lg="3">
                <v-subheader class="display-1 mt-3">Inline Radios</v-subheader>

                <v-radio-group row class="ml-4 mt-0">
                  <v-radio label="Row Option 1" value="radio-1" />

                  <v-radio label="Row Option 2" value="radio-2" />
                </v-radio-group>
              </v-col>
            </v-row>

            <v-subheader class="display-1 mt-3">Switches</v-subheader>

            <v-row no-gutters class="ml-4">
              <v-col cols="2">
                <v-switch input-value="true" label="On" value />
              </v-col>

              <v-col cols="2">
                <v-switch label="Off" />
              </v-col>

              <v-col cols="2">
                <v-switch disabled input-value="true" label="On Disabled" value />
              </v-col>

              <v-col cols="2">
                <v-switch disabled label="Disabled" />
              </v-col>

              <v-col cols="2">
                <v-switch input-value="true" label="Loading" loading="primary" value />
              </v-col>
            </v-row>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </ContainerWidu>
</template>

<script>
import ContainerWidu from "../components/base/ContainerWidu";

export default {
  name: "formLoker",
  components: {
    ContainerWidu
  },
  data: () => ({})
};
</script>