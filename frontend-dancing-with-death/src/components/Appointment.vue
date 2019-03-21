<template>
  <div class="container">
    <h1 class="title is-1">Dancing with Death</h1>
    <div class="columns">
      <div class="column is-one-quarter">
        <form method="POST" @submit.prevent="addItem()">
          <div class="field">
            <label class="label">Date Appointment</label>
            <div class="control">
              <input
                class="input"
                type="date"
                v-model="DateAppointment"
                @change="fetchAvailableHours()"
                required
              />
            </div>
          </div>
          <div class="card">
            <div class="field">
              <div class="card-header">
                <p class="card-header-title">Select an hour</p>
              </div>
              <div class="card-content">
                <div v-show="DateAppointment" class="control">
                  <p v-if="!radios.length">All hours are already booked</p>
                  <label
                    v-else
                    class="radio"
                    v-for="(radio, key) in radios"
                    :key="key"
                  >
                    <input
                      class="radio"
                      type="radio"
                      v-model="StartTime"
                      :value="radio"
                      required
                    />
                    At {{ radio }}:00
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                v-model="Email"
                placeholder="Email input"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Phone</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="555 5555"
                v-model="PhoneNumber"
              />
            </div>
          </div>
          <div class="field">
            <button type="submit" class="button is-link">Book</button>
          </div>
          <p class="help is-danger is-size-5">{{ error }}</p>
        </form>
      </div>

      <div class="column">
        <p id="counter"></p>

        <table class="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Hour</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in appointments" :key="key">
              <td>{{ new Date(item.dateAppointment).toLocaleDateString() }}</td>
              <td>{{ item.startTime }}:00</td>
              <td>{{ item.email ? item.email : '' }}</td>
              <td>{{ item.phoneNumber ? item.phoneNumber : '' }}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// TODO mensaje de existo al poster
import axios from 'axios'
import 'bulma/css/bulma.css'

export default {
  name: 'Appointment',
  data() {
    return {
      uri: 'https://localhost:5001/api/appointments',
      error: '',
      appointments: [],
      Email: null,
      radios: [],
      StartTime: null,
      PhoneNumber: null,
      DateAppointment: null
    }
  },
  methods: {
    async fetchAvailableHours() {
      this.error = ''
      try {
        const response = await axios.get(
          this.uri + '/getAvailableHours/' + this.DateAppointment
        )
        this.radios = response.data
      } catch (error) {
        this.error = error.response.data
      }
    },
    async addItem() {
      this.error = ''
      const appointment = {
        DateAppointment: this.DateAppointment,
        StartTime: this.StartTime,
        Email: this.Email,
        PhoneNumber: this.PhoneNumber
      }
      try {
        const response = await axios.post(this.uri, appointment)
        if (this.appointments.length >= 10) this.appointments.pop()
        this.appointments.unshift(response.data)
        this.Email = null
        this.PhoneNumber = null
        this.fetchAvailableHours()
      } catch (error) {
        this.error = error.response.data
      }
    }
  },
  async created() {
    try {
      const response = await axios.get(this.uri)
      this.appointments = response.data
    } catch (error) {
      this.error = error
    }
  }
}
</script>

<style></style>
