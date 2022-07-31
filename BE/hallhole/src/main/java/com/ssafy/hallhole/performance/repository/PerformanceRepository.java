package com.ssafy.hallhole.performance.repository;

import com.ssafy.hallhole.performance.domain.DetailPerformance;
import com.ssafy.hallhole.performance.domain.Facility;
import com.ssafy.hallhole.performance.domain.Performance;
import com.ssafy.hallhole.performance.domain.PerformanceLike;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface PerformanceRepository {

    void save(Performance performance);

    void saveDetail(DetailPerformance detailPerformance);

    void saveFacility(Facility facility);

    void savePerformanceLike(PerformanceLike performanceLike);

    void removePerformanceLike(PerformanceLike performanceLike);

    List<Performance> findAllPerformance();

    Performance findOnePerformanceById(String id);

    DetailPerformance findOneDetailPerformance(String id);

    List<String> findAllFacility();

    Facility findOneFacility(String id);

    List<Performance> findAllPerformancePaging(int start, int size);

    List<Facility> findAllFacilityPaging(int start, int size);
}
