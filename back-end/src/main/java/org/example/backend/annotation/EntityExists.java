package org.example.backend.annotation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import org.example.backend.annotation.validators.EntityExistsValidator;

import java.lang.annotation.*;

@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = EntityExistsValidator.class)
@Documented
public @interface EntityExists {
    String message() default "Entity with provided Property does not exist";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
    Class<?> entityClass();
    String propertyName();
}
