package net.javaguides.springboot;

import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Configuration
	public class CorsConfig implements WebMvcConfigurer{

		@Override
		public void addCorsMappings(CorsRegistry registry){
			registry.addMapping("/api/**")
					.allowedOrigins("http://localhost:3000")
					.allowedMethods("GET", "POST", "PUT", "DELETE")
					.allowedHeaders("*");
		}
	}

	@Override
	public void run(String... args) throws Exception {
		/*Employee employee = new Employee();
		employee.setFirstName("John");
		employee.setLastName("Wick");
		employee.setEmailId("johnwick@gmail.com");
		employeeRepository.save(employee);

		Employee employee1 = new Employee();
		employee1.setFirstName("Darth");
		employee1.setLastName("Vader");
		employee1.setEmailId("darthvader@gmail.com");
		employeeRepository.save(employee1);*/

	}
}
