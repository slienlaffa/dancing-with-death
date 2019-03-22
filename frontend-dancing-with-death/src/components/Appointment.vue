<template>
  <div class="container">
    <h1 class="title is-1">
      Dancing with Death
      <img src="../assets/death-icon.png" alt="death icon" id="logo" />
    </h1>
    <img
      src="../assets/dancing_with_death300.png"
      alt="death dancing"
      id="death"
      v-if="dance"
    />
    <div class="columns">
      <div class="column is-one-third">
        <form method="POST" @submit.prevent="addItem()">
          <div class="field">
            <label class="label">Date Appointment</label>
            <div class="control" id="calendar-wrap">
              <Calendar
                ref="calendar"
                :sundayBegin="false"
                @date="setDate($event)"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
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
            <div class="control has-icons-left">
              <span class="icon is-small is-left">
                <i class="fas fa-phone"></i>
              </span>
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
          <ul class="help is-danger is-size-8">
            <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
          </ul>
        </form>
      </div>
      <div class="column is-one-fifth">
        <div class="card" id="hours">
          <div class="field">
            <div class="card-header">
              <p class="card-header-title">Select an hour</p>
            </div>
            <div class="card-content" style="padding:0.5rem;">
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
                    name="StartTime"
                    :value="radio"
                    required
                  />
                  At {{ radio }}:00
                </label>
              </div>
            </div>
          </div>
        </div>
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
              <td>{{ item.email }}</td>
              <td>{{ item.phoneNumber }}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Calendar from 'imarker'

export default {
  name: 'Appointment',
  components: {
    Calendar
  },
  data() {
    return {
      dance: false,
      uri: 'https://localhost:5001/api/appointments',
      errors: [],
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
      try {
        const response = await axios.get(
          this.uri + '/getAvailableHours/' + this.DateAppointment
        )
        this.radios = response.data
      } catch (error) {
        this.errors.push(error.response.data)
      }
    },
    async addItem() {
      this.errors = []
      if (
        this.DateAppointment &&
        this.StartTime &&
        (this.Email || this.PhoneNumber)
      ) {
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
          this.StartTime = null
          this.fetchAvailableHours()
          this.dancing()
        } catch (error) {
          this.errors.push(error.response.data)
        }
      } else {
        if (!this.DateAppointment) this.errors.push('Date required')
        if (!this.StartTime) this.errors.push('StartTime required')
        if (!this.Email && !this.PhoneNumber)
          this.errors.push('Contact information required(EMAIL or PHONE)')
      }
    },
    async setDate(e) {
      this.DateAppointment = e.date
      this.errors = []
      this.fetchAvailableHours()
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    async dancing() {
      this.dance = true
      await this.sleep(5000)
      this.dance = false
    }
  },
  async created() {
    try {
      const response = await axios.get(this.uri)
      this.appointments = response.data
    } catch (error) {
      this.errors.push(error)
    }
  }
}
</script>

<style>
#calendar-wrap #calendar {
  min-width: 200px;
  margin-bottom: 10px;
}
#calendar-wrap .weekend-day span {
  color: #ee2e48;
}
#hours {
  margin-top: 30px;
}
.radio {
  display: table-row;
}
#logo {
  margin-top: 5px;
}
@-webkit-keyframes run {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
}
@keyframes run {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
}

@-webkit-keyframes dance {
  0% {
    -webkit-transform: rotateY(0deg);
  }
  100% {
    -webkit-transform: rotateY(360deg);
  }
}
@keyframes dance {
  0% {
    -webkit-transform: rotateY(0deg);
  }
  100% {
    -webkit-transform: rotateY(360deg);
  }
}

#death {
  position: absolute;
  z-index: 10;
  -webkit-animation: run 6s linear infinite alternate, dance 2s infinite linear;
  animation: run 6s linear infinite alternate, dance 2s infinite linear;
}
</style>
