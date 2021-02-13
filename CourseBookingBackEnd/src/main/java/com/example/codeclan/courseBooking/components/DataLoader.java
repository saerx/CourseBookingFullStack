package com.example.codeclan.courseBooking.components;

import com.example.codeclan.courseBooking.models.Booking;
import com.example.codeclan.courseBooking.models.Course;
import com.example.codeclan.courseBooking.models.Customer;
import com.example.codeclan.courseBooking.repositories.BookingRepository;
import com.example.codeclan.courseBooking.repositories.CourseRepository;
import com.example.codeclan.courseBooking.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    BookingRepository bookingRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Customer customer1 = new Customer("Saerlaith", "Glasgow", 12);
        customerRepository.save(customer1);
        Customer customer2 = new Customer("Kirsten", "Ayrshire", 27);
        customerRepository.save(customer2);
        Customer customer3 = new Customer("Robyn", "Edinburgh", 31);
        customerRepository.save(customer3);
        Customer customer4 = new Customer("Batman", "Gotham", 35);
        customerRepository.save(customer4);
        Customer customer5 = new Customer("Stephen", "Glasgow", 40);
        customerRepository.save(customer5);
        Customer customer6 = new Customer("Karen", "Edinburgh", 22);
        customerRepository.save(customer6);

        Course course1 = new Course("Sarcasm 101", "Remote", 1);
        courseRepository.save(course1);
        Course course2 = new Course("Java For Dafties", "Edinburgh", 4);
        courseRepository.save(course2);
        Course course3 = new Course("Why Potato, Why?", "Glasgow", 5);
        courseRepository.save(course3);

        Booking booking1 = new Booking("2021-01-01", customer1, course1);
        bookingRepository.save(booking1);
        Booking booking2 = new Booking("2020-06-01", customer2, course2);
        bookingRepository.save(booking2);
        Booking booking3 = new Booking("2021-08-01", customer3, course3);
        bookingRepository.save(booking3);
        Booking booking4 = new Booking("2021-08-01", customer4, course3);
        bookingRepository.save(booking4);
        Booking booking5 = new Booking("2021-08-01", customer6, course3);
        bookingRepository.save(booking5);
        Booking booking6 = new Booking("2021-03-03", customer5, course2);
    }


}
